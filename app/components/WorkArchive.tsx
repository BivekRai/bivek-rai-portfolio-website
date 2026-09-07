'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import type { Project, ProjectCategory } from '../data/projects';
import { ProjectVisual } from './ProjectVisual';

const categories: Array<{ label: string; value: ProjectCategory }> = [
  { label: 'Reports', value: 'Reports' },
  { label: 'Presentations', value: 'Presentations' },
  { label: 'Branding', value: 'Brand' },
  { label: 'Packaging', value: 'Packaging' },
  { label: 'Digital', value: 'Digital' },
];

const introductions: Record<ProjectCategory, { title: string; text: string }> = {
  Reports: { title: 'Reports that make complex information clear.', text: 'I design annual reports, integrated reports, quarterly reports, sustainability and ESG reports, impact reports and other corporate publications, building strong narratives around detailed business information.' },
  Presentations: { title: 'Presentations built to hold attention.', text: 'From corporate and investor presentations to pitch decks and leadership communication, I turn complex ideas into focused visual stories with clear structure, confident pacing and memorable information design.' },
  Brand: { title: 'Brand communication with a consistent voice.', text: 'My branding work includes visual identities, brochures, campaigns and marketing collaterals designed to keep every message recognisable, useful and connected across formats.' },
  Packaging: { title: 'Packaging with a clear identity.', text: 'Product packaging that brings together brand recognition, flavour differentiation and clear information across a consistent design system.' },
  Digital: { title: 'Digital experiences made easy to understand.', text: 'I apply the same clarity and hierarchy to UI/UX and web design, creating responsive digital experiences that feel modern, purposeful and simple to navigate.' },
};

export function WorkArchive({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ProjectCategory>('Reports');
  const [brand, setBrand] = useState<string | null>(null);
  const projectListRef = useRef<HTMLDivElement>(null);
  const categoryProjects = projects.filter((project) => project.category === category);
  const brands = Array.from(new Set(categoryProjects.map((project) => project.client)));
  const visible = categoryProjects.filter((project) => !brand || project.client === brand);
  const introduction = introductions[category];

  const selectCategory = (nextCategory: ProjectCategory) => {
    setCategory(nextCategory);
    setBrand(null);
  };

  return (
    <section className="archive">
      <div className="archive-projects" id="project-list" ref={projectListRef}>
        <div className="archive-navigation">
          <div className="category-tabs" aria-label="Project categories">
            {categories.map((item) => {
              const count = projects.filter((project) => project.category === item.value).length;
              return <button type="button" className={category === item.value ? 'is-active' : ''} onClick={() => selectCategory(item.value)} key={item.value}><strong>{item.label}</strong><span>{String(count).padStart(2, '0')}</span></button>;
            })}
          </div>
          <div className="brand-filter-row">
            <span>Brands in {categories.find((item) => item.value === category)?.label}</span>
            {brands.length > 0 ? <div className="brand-filter" aria-label={`Filter ${category} projects by brand`}>
              <button type="button" className={brand === null ? 'is-active' : ''} onClick={() => setBrand(null)}>All projects</button>
              {brands.map((client) => <button type="button" className={brand === client ? 'is-active' : ''} onClick={() => setBrand(client)} key={client}>{client}</button>)}
            </div> : <p>No brands in this category yet.</p>}
          </div>
        </div>

        <div className="archive-introduction">
          <span>{brand ? `Projects for ${brand}` : `${visible.length} selected projects`}</span>
          <div><h2>{introduction.title}</h2><p>{introduction.text}</p></div>
        </div>

        {visible.length === 0 ? <div className="archive-empty"><span>Projects coming later</span><p>No supplied work is available in this category yet.</p></div> : (
          <div className="archive-grid">
            {visible.map((project) => (
              <Link href={`/work/${project.slug}`} className="archive-card" key={project.slug} data-cursor="VIEW">
                <ProjectVisual project={project} variant="cover" />
                <div className="archive-card__meta">
                  <span>0{project.featuredOrder}</span>
                  <div>
                    <h2>{project.title}</h2>
                    <h3>{project.client}</h3>
                  </div>
                  <p>{project.label}<br />{project.year}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
