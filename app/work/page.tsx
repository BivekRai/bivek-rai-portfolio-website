import type { Metadata } from 'next';
import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';
import { WorkArchive } from '../components/WorkArchive';
import { projects } from '../data/projects';

export const metadata: Metadata = { title: 'Selected Work', description: 'Reports, presentations, identities and digital experiences by visual designer Bivek Rai.' };

export default function WorkPage() {
  return <main id="top" className="work-page"><div className="work-geometry" aria-hidden="true"><i /><i /><i /></div><SiteHeader /><header className="page-hero"><span>Work / 01</span><h1>Selected<br />Work.</h1><p>Reports, presentations, identities and digital experiences created to make complex communication clearer.</p></header><WorkArchive projects={projects} /><Footer /></main>;
}
