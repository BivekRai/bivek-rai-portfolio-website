'use client';

import { useEffect, useState } from 'react';
import type { Project } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';

export function ProjectGallery({ project }: { project: Project }) {
  const [active, setActive] = useState<number | null>(null);
  const count = project.visuals.length;

  useEffect(() => {
    if (active === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((active + 1) % count);
      if (event.key === 'ArrowLeft') setActive((active - 1 + count) % count);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', key);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', key); };
  }, [active, count]);

  return (
    <>
      <div className="project-gallery">
        {project.visuals.map((visual, index) => (
          <figure className={`gallery-item gallery-item--${visual.layout}`} key={visual.id}>
            <button type="button" onClick={() => setActive(index)} data-cursor="VIEW" aria-label={`Open ${visual.caption} fullscreen`}>
              <ProjectVisual project={project} variant={visual.variant} src={visual.src} alt={visual.alt} sizes="(max-width: 768px) 100vw, 72vw" />
            </button>
            <figcaption><span>{String(index + 1).padStart(2, '0')}</span><span>{visual.caption}</span></figcaption>
          </figure>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} visual viewer`}>
          <button className="lightbox-close" onClick={() => setActive(null)} autoFocus>Close</button>
          <button className="lightbox-prev" onClick={() => setActive((active - 1 + count) % count)} aria-label="Previous visual">←</button>
          <div className="lightbox-visual"><ProjectVisual project={project} variant={project.visuals[active].variant} src={project.visuals[active].src} alt={project.visuals[active].alt} eager sizes="100vw" /></div>
          <button className="lightbox-next" onClick={() => setActive((active + 1) % count)} aria-label="Next visual">→</button>
          <span className="lightbox-count">{String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
        </div>
      )}
    </>
  );
}
