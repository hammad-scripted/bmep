'use client';

import { useEffect, useRef } from 'react';

const interactiveSelector =
  'a, button, input, select, textarea, summary, [role="button"], [role="tab"]';

export default function CursorHalo() {
  const layerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    );

    if (!motionQuery.matches) return;

    const layer = layerRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!layer || !dot || !ring) return;

    document.body.classList.add('has-custom-cursor');

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let frame = 0;

    const place = (element: HTMLElement, x: number, y: number) => {
      element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      place(ring, ringX, ringY);
      frame = window.requestAnimationFrame(animate);
    };

    const handleMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      place(dot, targetX, targetY);
      layer.classList.add('is-visible');

      const target = event.target instanceof Element ? event.target : null;
      layer.classList.toggle('is-hovering', Boolean(target?.closest(interactiveSelector)));
    };

    const handleDown = () => layer.classList.add('is-pressed');
    const handleUp = () => layer.classList.remove('is-pressed');
    const handleLeave = () => layer.classList.remove('is-visible');
    const handleEnter = () => layer.classList.add('is-visible');

    place(dot, targetX, targetY);
    place(ring, ringX, ringY);
    frame = window.requestAnimationFrame(animate);

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerdown', handleDown, { passive: true });
    window.addEventListener('pointerup', handleUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleLeave);
    document.documentElement.addEventListener('mouseenter', handleEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.documentElement.removeEventListener('mouseenter', handleEnter);
    };
  }, []);

  return (
    <div className="cursor-layer" ref={layerRef} aria-hidden="true">
      <span className="cursor-dot" ref={dotRef} />
      <span className="cursor-ring" ref={ringRef}>
        <span>↗</span>
      </span>
    </div>
  );
}
