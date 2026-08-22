'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const element = cursor.current;
    if (!element) return;
    const move = (event: PointerEvent) => {
      element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      const target = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
      element.textContent = target?.dataset.cursor ?? '';
      element.classList.toggle('is-active', Boolean(target));
    };
    const leave = () => element.classList.remove('is-visible');
    const enter = () => element.classList.add('is-visible');
    window.addEventListener('pointermove', move);
    document.documentElement.addEventListener('mouseleave', leave);
    document.documentElement.addEventListener('mouseenter', enter);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.documentElement.removeEventListener('mouseenter', enter);
    };
  }, []);

  return <div className="custom-cursor" ref={cursor} aria-hidden="true" />;
}
