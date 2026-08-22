import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '../../components/Footer';
import { ProjectGallery } from '../../components/ProjectGallery';
import { ProjectVisual } from '../../components/ProjectVisual';
import { SiteHeader } from '../../components/SiteHeader';
import { nextProject, projectBySlug, projects } from '../../data/projects';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const project = projectBySlug((await params).slug); if (!project) return {}; return { title: project.seo.title, description: project.seo.description, openGraph: { title: project.seo.title, description: project.seo.description, images: [] }, twitter: { title: project.seo.title, description: project.seo.description, images: [] } }; }

export default async function ProjectPage({ params }: Props) {
  const project = projectBySlug((await params).slug); if (!project) notFound(); const next = nextProject(project.slug);
  return <main id="top"><SiteHeader /><header className="project-hero"><div className="project-hero__meta"><span>0{project.featuredOrder} / {project.label}</span><span>Demonstration project</span><span>{project.year}</span></div><h1>{project.client}</h1><p>{project.title}</p></header><div className="project-hero-visual"><ProjectVisual project={project} variant="cover" /></div><section className="project-intro section-pad"><div className="project-facts"><div><span>Client</span><strong>{project.client}</strong></div><div><span>Category</span><strong>{project.category}</strong></div><div><span>Project</span><strong>{project.label}</strong></div><div><span>Year</span><strong>{project.year}</strong></div></div><div className="project-overview"><span>Overview</span><p>{project.intro}</p></div></section><section className="visual-story"><div className="section-label"><span>Selected visuals</span><span>Click any visual to view fullscreen</span></div><ProjectGallery project={project} /></section><Link className="next-project" href={`/work/${next.slug}`} data-cursor="VIEW"><span>Next project</span><strong>{next.client} →</strong><ProjectVisual project={next} variant="detail" /></Link><Footer /></main>;
}
