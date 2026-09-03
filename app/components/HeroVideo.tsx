'use client';

import { useEffect, useRef, useState } from 'react';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    const sync = () => {
      if (!motion.matches && inView && !document.hidden) {
        void video.play().catch(() => { /* Keep the still preview if autoplay is blocked. */ });
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(video);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      video.pause();
    };
  }, []);

  return <section className="hero-video" aria-label="Design motion preview">
    {failed ? <img className="hero-video-media" src="/hero/design-motion-poster.jpg" alt="Design motion preview" /> :
      <video ref={videoRef} id="hero-motion" className="hero-video-media"
        src="/hero/design-motion.mp4" poster="/hero/design-motion-poster.jpg"
        width={1280} height={720} muted loop playsInline preload="metadata"
        aria-label="Design motion preview"
        onError={() => setFailed(true)} />}
  </section>;
}
