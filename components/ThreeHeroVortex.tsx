"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader.js";

const CONFIG = {
  filaments: 600,
  perFilament: 600,
  coreRadius: 1.83,
  maxRadius: 15,
  radialExpo: 1.75,
  swirl: 0.8,
  spread: 0.89,
  depth: 2.8,
  curlAmp: 0,
  curlScale: 0.04,
  curlGrow: 1.45,
  flowSpeed: 0.22,
  streamSpeed: 3.8,
  pulseFreq: 8,
  coreFall: 0.02,
  twinkleSpeed: 2.75,
  flipSpeed: 4,
  pointSize: 2.4,
  coreBoost: 8,
  brightness: 2.3,
  saturation: 0.56,
  haloAmt: 0.8,
  haloFalloff: 1,
  coreColor: "#eaf3ff",
  strandColor: "#aecbff",
  sparkColor: "#bfe6ff",
  coreGlow: 0.35,
  coreSize: 8.7,
  coreSpikes: 0.74,
  autoSpin: 0.105,
  tilt: 0.58,
  parallax: 0.6,
  opacity: 1,
  bgColor: "#0a1326",
  bgColor2: "#04060f",
  coreBg: "#16213f",
  flameColor: "#3a78ff",
  flameColor2: "#9fe0ff",
  flameAmt: 0.22,
  starCount: 320,
  starColor: "#cfe2ff",
  starSize: 2,
  starTwinkle: 1.2,
  atmoColor: "#bcd6ff",
  atmoCount: 160,
  atmoSize: 14,
  atmoSpeed: 1,
};

const LAYERS = {
  TORUS_SCENE: 1,
  BLOOM_SCENE: 2,
  FINAL_SCENE: 3,
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

function hexToVec3(hex: string) {
  const n = Number.parseInt(hex.slice(1), 16);
  return new THREE.Vector3(
    ((n >> 16) & 255) / 255,
    ((n >> 8) & 255) / 255,
    (n & 255) / 255,
  );
}

function buildFilaments() {
  const count = CONFIG.filaments * CONFIG.perFilament;
  const positions = new Float32Array(count * 3);
  const angles = new Float32Array(count);
  const strandSeeds = new Float32Array(count);
  const along = new Float32Array(count);
  const seeds = new Float32Array(count);
  const glyphSeeds = new Float32Array(count);

  let index = 0;
  for (let f = 0; f < CONFIG.filaments; f++) {
    const angle = Math.random() * Math.PI * 2;
    const strandSeed = Math.random();

    for (let p = 0; p < CONFIG.perFilament; p++) {
      angles[index] = angle;
      strandSeeds[index] = strandSeed;
      along[index] = p / (CONFIG.perFilament - 1);
      seeds[index] = Math.random();
      glyphSeeds[index] = Math.random();
      index++;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aAngle", new THREE.BufferAttribute(angles, 1));
  geometry.setAttribute("aFil", new THREE.BufferAttribute(strandSeeds, 1));
  geometry.setAttribute("aS", new THREE.BufferAttribute(along, 1));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
  geometry.setAttribute("aGlyph", new THREE.BufferAttribute(glyphSeeds, 1));
  return geometry;
}

const filamentVertexShader = /* glsl */ `
attribute float aAngle;
attribute float aFil;
attribute float aS;
attribute float aSeed;
attribute float aGlyph;

uniform float iTime;
uniform float uAlpha;
uniform vec2 uRes;
uniform float uCoreR, uMaxR, uExpo, uSwirl, uSpread, uDepth;
uniform float uCurlAmp, uCurlScale, uCurlGrow, uFlowSpeed;
uniform float uStreamSpeed, uPulseFreq, uCoreFall, uTwinkle, uFlipSpeed;
uniform float uSize, uCoreBoost, uBright, uSat;
uniform vec3 uCore, uStrand, uSpark;

varying vec3 vCol;
varying float vBright;
varying float vAngle;

#define TAU 6.2831853

vec3 flow(vec3 p, float t) {
  vec3 q = p;
  q.x += 0.9 * sin(t + 1.7 * p.y);
  q.y += 0.9 * cos(t + 1.7 * p.z);
  q.z += 0.9 * sin(t + 1.7 * p.x);
  q.x += 0.5 * cos(t * 1.3 + 2.9 * q.z);
  q.z += 0.5 * sin(t * 1.1 + 2.9 * q.y);
  return q - p;
}

void main() {
  float s = aS;
  float radiusS = 0.3 + 0.7 * s;
  float radius = uCoreR + (uMaxR - uCoreR) * pow(radiusS, uExpo);

  float ang = aAngle + uSwirl * radius * (0.6 + 0.4 * aFil);
  ang += sin(s * 6.0 + aFil * 30.0) * uSpread * (0.25 + 0.75 * s);

  vec3 dir = vec3(cos(ang), sin(ang), 0.0);
  vec3 pos = dir * radius;
  pos.z = (aFil - 0.5) * uDepth * (0.4 + radius * 0.12);

  vec3 fp = pos * uCurlScale + vec3(0.0, 0.0, aFil * 12.0);
  vec3 curl = flow(fp, iTime * uFlowSpeed) * uCurlAmp * (0.18 + uCurlGrow * s);
  float curlLength = length(curl);
  pos += curl * min(1.0, radius * 0.24 / max(curlLength, 0.0001));

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);

  float coreGlow = exp(-radius * radius * uCoreFall);
  float pulse = 0.5 + 0.5 * sin(TAU * uPulseFreq * s - iTime * uStreamSpeed + aFil * 6.0);
  float tw = 0.7 + 0.3 * sin(iTime * uTwinkle + aSeed * 40.0 + aGlyph * 6.2831853);
  float flip = 0.92 + 0.08 * sin(iTime * uFlipSpeed + aGlyph * 6.2831853);
  float tip = 1.0 - 0.8 * smoothstep(0.72, 1.0, s);

  vBright = (0.22 + 0.95 * coreGlow) * (0.45 + 0.75 * pulse) * tw * flip * tip * uBright * uAlpha;

  vec3 spark = mix(uStrand, uSpark, uSat);
  vec3 col = mix(uStrand, spark, step(0.72, aSeed) * (0.4 + 0.6 * uSat));
  col = mix(col, uCore, coreGlow * 0.85);
  vCol = col;

  vAngle = ang + 1.5707963 + atan(radius * uSwirl * (0.6 + 0.4 * aFil));

  float size = uSize * (0.55 + uCoreBoost * coreGlow) * (0.7 + 0.6 * pulse);
  gl_PointSize = clamp(size * uRes.y / 1000.0 / -mv.z * 1.7, 1.0, 64.0);
  gl_Position = projectionMatrix * mv;
}
`;

const filamentFragmentShader = /* glsl */ `
uniform float uHaloAmt, uHaloFall;
varying vec3 vCol;
varying float vBright;
varying float vAngle;

void main() {
  vec2 pc = (gl_PointCoord - 0.5) * 2.0;
  float c = cos(vAngle);
  float s = sin(vAngle);
  pc = mat2(c, -s, s, c) * pc;
  float d = length(vec2(pc.x * 0.42, pc.y * 1.6));
  float mask = pow(max(0.0, 1.0 - d), uHaloFall) * uHaloAmt * 0.14;
  if (mask <= 0.001) discard;
  gl_FragColor = vec4(vCol * vBright, mask);
}
`;

const coreVertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const coreFragmentShader = /* glsl */ `
uniform vec3 uColor;
uniform float uGlow, uSpikes, uAlpha;
varying vec2 vUv;

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = length(p);
  vec2 rays = vec2(p.x + p.y, p.y - p.x) * 0.70710678;
  float core = exp(-r * r * 520.0);
  float halo = exp(-r * r * 18.0) * 0.12;
  float sx = exp(-abs(rays.y) * 220.0) * exp(-abs(rays.x) * 16.0);
  float sy = exp(-abs(rays.x) * 220.0) * exp(-abs(rays.y) * 16.0);
  float spikes = (sx + sy) * uSpikes;
  float intensity = (core * 3.0 + halo + spikes * 2.8) * uGlow;
  gl_FragColor = vec4(uColor * intensity * 3.0, min(intensity, 1.0) * uAlpha);
}
`;

const starVertexShader = /* glsl */ `
attribute float size;
attribute float seed;
uniform float uTime, uTwinkle;
uniform vec2 uRes;
varying float vA;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vA = 0.4 + 0.6 * (0.5 + 0.5 * sin(uTime * uTwinkle + seed * 60.0));
  gl_PointSize = max(1.0, size * uRes.y / 900.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`;

const starFragmentShader = /* glsl */ `
uniform vec3 uColor;
varying float vA;

void main() {
  vec2 p = gl_PointCoord - 0.5;
  float l = length(p);
  if (l > 0.5) discard;
  float tex = 1.0 - smoothstep(0.0, 0.5, l);
  gl_FragColor = vec4(uColor * tex, tex * vA * 0.7);
}
`;

const moteVertexShader = /* glsl */ `
attribute float size;
attribute float seed;
uniform float uTime;
uniform vec2 uRes;
varying float vA;

vec3 warp(vec3 p, float t) {
  float c = 0.9, a = 1.9, b = 0.02, s = 0.05;
  p *= 2.0;
  p.x += c * sin(s * t + a * p.y) + t * b;
  p.y += c * cos(s * t + a * p.x);
  p.y += c * sin(s * t + a * p.z) + t * b;
  p.z += c * cos(s * t + a * p.y);
  p.z += c * sin(s * t + a * p.x) + t * b;
  p.x += c * cos(s * t + a * p.z);
  return cos(p + vec3(1.0, 2.0, 4.0));
}

void main() {
  vec3 v = position * 4.0 + warp(position, uTime) * 1.2;
  vec4 mv = modelViewMatrix * vec4(v, 1.0);
  float r = length(v);
  float farF = 1.0 - smoothstep(5.0, 6.5, r);
  float nearF = smoothstep(0.0, 0.5, -mv.z);
  vA = farF * nearF;
  gl_PointSize = max(size * uRes.y / 900.0 / -mv.z, 1.0);
  gl_Position = projectionMatrix * mv;
}
`;

const moteFragmentShader = /* glsl */ `
uniform vec3 uColor;
varying float vA;

void main() {
  vec2 p = gl_PointCoord - 0.5;
  float l = length(p);
  if (l > 0.5) discard;
  float tex = 1.0 - smoothstep(0.0, 0.5, l);
  gl_FragColor = vec4(uColor * tex, tex * vA * 0.4);
}
`;

const finalShader = {
  uniforms: {
    tDiffuse: { value: null },
    torusTexture: { value: null },
    bloomTexture: { value: null },
    iTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
    uBg: { value: hexToVec3(CONFIG.bgColor) },
    uBg2: { value: hexToVec3(CONFIG.bgColor2) },
    uCoreBg: { value: hexToVec3(CONFIG.coreBg) },
    uFlameA: { value: hexToVec3(CONFIG.flameColor) },
    uFlameB: { value: hexToVec3(CONFIG.flameColor2) },
    uFlameAmt: { value: CONFIG.flameAmt },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float iTime;
    uniform sampler2D tDiffuse;
    uniform sampler2D bloomTexture;
    uniform sampler2D torusTexture;
    uniform vec3 uBg, uBg2, uCoreBg, uFlameA, uFlameB;
    uniform float uFlameAmt;
    uniform vec2 uRes;
    varying vec2 vUv;

    vec3 warp3d(vec3 pos, float t) {
      float curv = 0.8, a = 1.9, b = 0.7;
      pos *= 2.0;
      pos.x += curv * sin(t + a * pos.y) + t * b;
      pos.y += curv * cos(t + a * pos.x);
      pos.y += curv * sin(t + a * pos.z) + t * b;
      pos.z += curv * cos(t + a * pos.y);
      pos.z += curv * sin(t + a * pos.x) + t * b;
      pos.x += curv * cos(t + a * pos.z);
      return 0.5 + 0.5 * cos(pos.xyz + vec3(1.0, 2.0, 4.0));
    }

    void main() {
      vec2 uv = 2.0 * vUv - 1.0;
      uv.x *= uRes.x / uRes.y;
      vec3 w = pow(warp3d(vec3(uv.x, sin(uv.y), uv.y), iTime * 0.22), vec3(1.5));
      vec3 flame = 1.5 * uFlameA * w.x;
      flame *= w.y;
      flame += uFlameB * w.z;
      flame *= smoothstep(0.55, 1.2, abs(uv.y));
      float md = smoothstep(-0.7, 1.0, -uv.y * uv.x);
      flame *= md * md;

      float r = length(uv);
      vec3 bg = mix(uBg2, uBg, vUv.y) * (1.0 - 0.24 * smoothstep(0.0, 1.6, r));
      bg += uCoreBg * exp(-r * r * 1.4) * 0.12;

      vec3 torus = texture2D(torusTexture, vUv).xyz;
      vec3 bloom = texture2D(bloomTexture, vUv).xyz;
      vec3 scene = texture2D(tDiffuse, vUv).xyz;

      gl_FragColor = vec4(bg + flame * uFlameAmt + bloom + torus + scene, 1.0);
    }
  `,
};

export default function ThreeHeroVortex() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || 680;
    const height = canvas.clientHeight || 680;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.setClearColor(0x000000, 1);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = null;

    const camera = new THREE.PerspectiveCamera(52, width / height, 0.1, 240);
    camera.position.set(0, 0, 17);
    camera.lookAt(0, 0, 0);

    const vortexGroup = new THREE.Group();
    vortexGroup.scale.setScalar(0.4);
    scene.add(vortexGroup);

    const filamentGeometry = buildFilaments();

    const filamentMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        iTime: { value: 0 },
        uAlpha: { value: 0 },
        uRes: { value: new THREE.Vector2(width * dpr, height * dpr) },
        uCoreR: { value: CONFIG.coreRadius },
        uMaxR: { value: CONFIG.maxRadius },
        uExpo: { value: CONFIG.radialExpo },
        uSwirl: { value: CONFIG.swirl },
        uSpread: { value: CONFIG.spread },
        uDepth: { value: CONFIG.depth },
        uCurlAmp: { value: CONFIG.curlAmp },
        uCurlScale: { value: CONFIG.curlScale },
        uCurlGrow: { value: CONFIG.curlGrow },
        uFlowSpeed: { value: CONFIG.flowSpeed },
        uStreamSpeed: { value: CONFIG.streamSpeed },
        uPulseFreq: { value: Math.round(CONFIG.pulseFreq) },
        uCoreFall: { value: CONFIG.coreFall },
        uTwinkle: { value: CONFIG.twinkleSpeed },
        uFlipSpeed: { value: CONFIG.flipSpeed },
        uSize: { value: CONFIG.pointSize },
        uCoreBoost: { value: CONFIG.coreBoost },
        uBright: { value: CONFIG.brightness },
        uSat: { value: CONFIG.saturation },
        uHaloAmt: { value: CONFIG.haloAmt },
        uHaloFall: { value: CONFIG.haloFalloff },
        uCore: { value: hexToVec3(CONFIG.coreColor) },
        uStrand: { value: hexToVec3(CONFIG.strandColor) },
        uSpark: { value: hexToVec3(CONFIG.sparkColor) },
      },
      vertexShader: filamentVertexShader,
      fragmentShader: filamentFragmentShader,
    });

    const filaments = new THREE.Points(filamentGeometry, filamentMaterial);
    filaments.frustumCulled = false;
    filaments.layers.set(LAYERS.TORUS_SCENE);
    vortexGroup.add(filaments);

    const coreMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uColor: { value: hexToVec3(CONFIG.coreColor) },
        uGlow: { value: CONFIG.coreGlow },
        uSpikes: { value: CONFIG.coreSpikes },
        uAlpha: { value: 0 },
      },
      vertexShader: coreVertexShader,
      fragmentShader: coreFragmentShader,
    });

    const core = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), coreMaterial);
    core.scale.setScalar(CONFIG.coreSize * 4);
    core.layers.set(LAYERS.TORUS_SCENE);
    vortexGroup.add(core);

    // Starfield on a distant shell.
    const starCount = Math.round(CONFIG.starCount);
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starSeeds = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const rr = Math.sqrt(1 - u * u);
      const radius = 60 + Math.random() * 30;
      starPositions[i * 3] = rr * Math.cos(theta) * radius;
      starPositions[i * 3 + 1] = rr * Math.sin(theta) * radius;
      starPositions[i * 3 + 2] = -Math.abs(u * radius) - 20;
      starSizes[i] = CONFIG.starSize * (0.5 + Math.random());
      starSeeds[i] = Math.random();
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));
    starGeometry.setAttribute("seed", new THREE.BufferAttribute(starSeeds, 1));

    const starMaterial = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: hexToVec3(CONFIG.starColor) },
        uTwinkle: { value: CONFIG.starTwinkle },
        uRes: { value: new THREE.Vector2(width * dpr, height * dpr) },
      },
      vertexShader: starVertexShader,
      fragmentShader: starFragmentShader,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    stars.frustumCulled = false;
    stars.layers.set(LAYERS.BLOOM_SCENE);
    scene.add(stars);

    // Camera-attached motes.
    const moteCount = Math.round(CONFIG.atmoCount);
    const motePositions = new Float32Array(moteCount * 3);
    const moteSizes = new Float32Array(moteCount);
    const moteSeeds = new Float32Array(moteCount);

    for (let i = 0; i < moteCount; i++) {
      motePositions[i * 3] = Math.random() * 2 - 1;
      motePositions[i * 3 + 1] = Math.random() * 2 - 1;
      motePositions[i * 3 + 2] = Math.random() * 2 - 1;
      moteSizes[i] = CONFIG.atmoSize * (0.4 + Math.random());
      moteSeeds[i] = Math.random();
    }

    const moteGeometry = new THREE.BufferGeometry();
    moteGeometry.setAttribute("position", new THREE.BufferAttribute(motePositions, 3));
    moteGeometry.setAttribute("size", new THREE.BufferAttribute(moteSizes, 1));
    moteGeometry.setAttribute("seed", new THREE.BufferAttribute(moteSeeds, 1));

    const moteMaterial = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: hexToVec3(CONFIG.atmoColor) },
        uRes: { value: new THREE.Vector2(width * dpr, height * dpr) },
      },
      vertexShader: moteVertexShader,
      fragmentShader: moteFragmentShader,
    });

    const motes = new THREE.Points(moteGeometry, moteMaterial);
    motes.frustumCulled = false;
    motes.layers.set(LAYERS.BLOOM_SCENE);
    scene.add(motes);

    const renderScene = new RenderPass(scene, camera);

    const torusComposer = new EffectComposer(renderer);
    torusComposer.renderToScreen = false;
    torusComposer.addPass(renderScene);
    torusComposer.addPass(new ShaderPass(GammaCorrectionShader));
    torusComposer.addPass(
      new UnrealBloomPass(new THREE.Vector2(width, height), 0.22, 0.2, 0),
    );
    torusComposer.addPass(new ShaderPass(CopyShader));

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(
      new UnrealBloomPass(new THREE.Vector2(width, height), 0.4, 0.6, 0),
    );
    bloomComposer.addPass(new ShaderPass(GammaCorrectionShader));

    const finalComposer = new EffectComposer(renderer);
    const finalPass = new ShaderPass(finalShader);
    finalComposer.addPass(renderScene);
    finalComposer.addPass(finalPass);

    finalPass.uniforms.uRes.value.set(width, height);

    const target = new THREE.Vector2(0, 0);
    const mouse = new THREE.Vector2(0, 0);
    let previousTime = performance.now() / 1000;
    const appearStart = performance.now();
    let spin = 0;
    let animationFrame = 0;
    let disposed = false;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener("pointermove", handlePointerMove);

    const animate = () => {
      if (disposed) return;
      animationFrame = requestAnimationFrame(animate);

      const nowMs = performance.now();
      const t = nowMs / 1000;
      const dt = Math.min(0.05, t - previousTime);
      previousTime = t;

      mouse.x = lerp(mouse.x, target.x, 0.06);
      mouse.y = lerp(mouse.y, target.y, 0.06);

      const alpha = clamp((nowMs - appearStart - 300) / 1800, 0, 1) * CONFIG.opacity;
      filamentMaterial.uniforms.iTime.value = t;
      filamentMaterial.uniforms.uAlpha.value = alpha;
      coreMaterial.uniforms.uAlpha.value = alpha;

      spin += dt * CONFIG.autoSpin;
      vortexGroup.rotation.z = spin;
      vortexGroup.rotation.x = lerp(vortexGroup.rotation.x, -mouse.y * CONFIG.tilt, 0.05);
      vortexGroup.rotation.y = lerp(vortexGroup.rotation.y, mouse.x * CONFIG.tilt, 0.05);

      core.quaternion.copy(camera.quaternion);

      camera.position.x = lerp(camera.position.x, mouse.x * CONFIG.parallax, 0.05);
      camera.position.y = lerp(camera.position.y, mouse.y * CONFIG.parallax, 0.05);
      camera.lookAt(0, 0, 0);

      starMaterial.uniforms.uTime.value = t;
      moteMaterial.uniforms.uTime.value = t * CONFIG.atmoSpeed;
      motes.position.copy(camera.position);
      finalPass.uniforms.iTime.value = t;

      camera.layers.set(LAYERS.TORUS_SCENE);
      torusComposer.render();

      camera.layers.set(LAYERS.BLOOM_SCENE);
      bloomComposer.render();
      finalPass.uniforms.bloomTexture.value = bloomComposer.readBuffer.texture;

      camera.layers.set(LAYERS.FINAL_SCENE);
      finalPass.uniforms.torusTexture.value = torusComposer.readBuffer.texture;
      finalComposer.render();
    };

    animate();

    const resize = () => {
      const w = canvas.clientWidth || 680;
      const h = canvas.clientHeight || 680;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);

      renderer.setPixelRatio(dpr);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      for (const composer of [torusComposer, bloomComposer, finalComposer]) {
        composer.setPixelRatio(dpr);
        composer.setSize(w, h);
      }

      filamentMaterial.uniforms.uRes.value.set(w * dpr, h * dpr);
      starMaterial.uniforms.uRes.value.set(w * dpr, h * dpr);
      moteMaterial.uniforms.uRes.value.set(w * dpr, h * dpr);
      finalPass.uniforms.uRes.value.set(w, h);
    };

    window.addEventListener("resize", resize);

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);

      filamentGeometry.dispose();
      filamentMaterial.dispose();
      core.geometry.dispose();
      coreMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      moteGeometry.dispose();
      moteMaterial.dispose();

      for (const composer of [torusComposer, bloomComposer, finalComposer]) {
        for (const pass of composer.passes) {
          if (typeof pass.dispose === "function") {
            pass.dispose();
          }

          if (pass instanceof ShaderPass) {
            pass.material.dispose();
          }
        }

        composer.copyPass.material.dispose();
        composer.renderTarget1.dispose();
        composer.renderTarget2.dispose();
      }

      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
