
"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const position = useRef({
    x: 0,
    y: 0,
  });

  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateDevice = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      const target = event.target as HTMLElement | null;

      const interactive = target?.closest(
        "a, button, [data-cursor]"
      );

      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame = 0;

    const animate = () => {
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.18;

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }

      if (followerRef.current) {
        const followerX =
          position.current.x +
          (mouse.current.x - position.current.x) * 0.15;

        const followerY =
          position.current.y +
          (mouse.current.y - position.current.y) * 0.15;

        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-accent shadow-[0_0_14px_rgba(139,92,246,0.8)]"
      />

      <div
        ref={followerRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9998] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-300 ${
          isHovering
            ? "h-14 w-14 border-violet-accent/40 bg-violet-accent/[0.08]"
            : "h-8 w-8 border-violet-accent/30 bg-transparent"
        }`}
      />
    </>
  );
}
