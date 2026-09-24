'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  direction?: RevealDirection;
  className?: string;
  style?: CSSProperties;
  staggerChildren?: string;
}

export function Reveal({
  children,
  delay = 0,
  y = 36,
  x = 0,
  direction = 'up',
  className = '',
  style,
  staggerChildren,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      gsap.set(el, { clearProps: 'all' });
      if (staggerChildren) gsap.set(el.querySelectorAll(staggerChildren), { clearProps: 'all' });
      return;
    }

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === 'up') from.y = y;
    else if (direction === 'down') from.y = -y;
    else if (direction === 'left') from.x = x || 48;
    else if (direction === 'right') from.x = -(x || 48);
    else if (direction === 'scale') {
      from.scale = 0.92;
      from.y = y * 0.4;
    }

    const ctx = gsap.context(() => {
      if (staggerChildren) {
        const kids = el.querySelectorAll(staggerChildren);
        gsap.set(el, { opacity: 1, y: 0, x: 0 });
        gsap.fromTo(
          kids,
          { ...from },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.85,
            delay: delay / 1000,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(el, from, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.9,
          delay: delay / 1000,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [delay, y, x, direction, staggerChildren]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: staggerChildren ? 1 : 0, ...style }}
    >
      {children}
    </div>
  );
}
