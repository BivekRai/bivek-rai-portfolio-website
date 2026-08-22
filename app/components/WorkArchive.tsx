'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Project, ProjectCategory } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';

const filters: Array<'All' | ProjectCategory> = ['All', 'Reports', 'Presentations', 'Brand', 'Digital'];

export function WorkArchive({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [view, setView] = useState<'visual' | 'index'>('visual');
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="archive">
      <div className="archive-controls">
        <div className="filter-group" aria-label="Filter work">
          {filters.map((item) => <button type="button" className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}
        </div>
        <div className="view-toggle" aria-label="Choose view">
          <button type="button" className={view === 'visual' ? 'is-active' : ''} onClick={() => setView('visual')}>Visual</button>
          <button type="button" className={view === 'index' ? 'is-active' : ''} onClick={() => setView('index')}>Index</button>
        </div>
      </div>

      {view === 'visual' ? (
        <div className="archive-grid">
          {visible.map((project) => (
            <Link href={`/work/${project.slug}`} className="archive-card" key={project.slug} data-cursor="VIEW">
              <ProjectVisual project={project} variant={project.featuredOrder % 2 ? 'cover' : 'system'} />
              <div><span>0{project.featuredOrder}</span><h2>{project.client}</h2><p>{project.label} · {project.year}</p></div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="archive-index">
          {visible.map((project) => (
            <Link href={`/work/${project.slug}`} key={project.slug} data-cursor="VIEW"><span>0{project.featuredOrder}</span><strong>{project.client}</strong><span>{project.label}</span><span>{project.year}</span><ProjectVisual project={project} variant="detail" /></Link>
          ))}
        </div>
      )}
    </section>
  );
}
