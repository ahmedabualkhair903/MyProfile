
"use client";

import {
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function Magnetic({
  children,
  className = "",
  strength = 0.25,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();

    const x =
      event.clientX -
      (rect.left + rect.width / 2);

    const y =
      event.clientY -
      (rect.top + rect.height / 2);

    ref.current.style.transform = `translate3d(${x * strength}px, ${
      y * strength
    }px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) {
      return;
    }

    ref.current.style.transform =
      "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
