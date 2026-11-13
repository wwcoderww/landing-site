import { useEffect, useRef, useState } from "react";

type ScrollEffectProps = {
  children: React.ReactNode;
  direction: "left" | "right" | "top" | "bottom";
};

export default function ScrollEffect({
  children,
  direction,
}: ScrollEffectProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directions = {
    left: "-translate-x-40 md:-translate-x-100",
    right: "translate-x-40 md:translate-x-100",
    top: "md:-translate-y-24",
    bottom: "md:translate-y-24",
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1200 ease-out
        ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directions[direction]}`}`}
    >
      {children}
    </div>
  );
}
