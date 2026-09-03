'use client';

import { useEffect, useRef, useState } from 'react';

type GalleryProject = { slug: string; client: string; title: string; image: string; portrait: boolean };

function WallTrack({ items, className = '' }: { items: GalleryProject[]; className?: string }) {
  return <div className={`work-wall-track ${className}`}>
    {[0, 1].map((copy) => <div className="work-wall-group" key={copy}>
      {items.map((item) => <div className={`work-wall-image${item.portrait ? ' work-wall-image--portrait' : ''}`} key={item.slug}>
        <img src={item.image} alt="" draggable={false} decoding="async" />
      </div>)}
    </div>)}
  </div>;
}

export function HeroGallery({ items }: { items: GalleryProject[] }) {
  const [paused, setPaused] = useState(false);
  const [inactive, setInactive] = useState(false);
  const wallRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let inView = true;
    const sync = () => setInactive(document.hidden || !inView);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); });
    if (wallRef.current) observer.observe(wallRef.current);
    document.addEventListener('visibilitychange', sync);
    sync();
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); };
  }, []);

  const portraits = items.filter((item) => item.portrait);
  const landscapes = items.filter((item) => !item.portrait);
  const mixed: GalleryProject[] = [];
  for (let i = 0; i < Math.max(Math.ceil(portraits.length / 2), landscapes.length); i++) {
    if (portraits[i * 2]) mixed.push(portraits[i * 2]);
    if (landscapes[i]) mixed.push(landscapes[i]);
    if (portraits[i * 2 + 1]) mixed.push(portraits[i * 2 + 1]);
  }

  if (!mixed.length) return null;

  return <section ref={wallRef} className="work-wall" data-paused={paused || inactive} aria-label="Animated portfolio preview">
    <div className="work-wall-window" aria-hidden="true">
      <div className="work-wall-columns">
        <WallTrack items={mixed.filter((_, index) => index % 2 === 0)} />
        <WallTrack items={mixed.filter((_, index) => index % 2 === 1)} className="work-wall-track--reverse" />
      </div>
      <WallTrack items={mixed} className="work-wall-track--mobile" />
    </div>
    <button className="work-wall-pause" type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
      <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span> {paused ? 'Resume motion' : 'Pause motion'}
    </button>
  </section>;
}
