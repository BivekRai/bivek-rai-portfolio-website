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
      element.classList.toggle('is-visible', Boolean(target));
    };
    const leave = () => element.classList.remove('is-visible');
    window.addEventListener('pointermove', move);
    window.addEventListener('scroll', leave, true);
    window.addEventListener('click', leave);
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', leave, true);
      window.removeEventListener('click', leave);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <div className="custom-cursor" ref={cursor} aria-hidden="true" />;
}
