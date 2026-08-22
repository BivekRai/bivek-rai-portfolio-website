import Link from 'next/link';
import { Footer } from './components/Footer';
import { ProjectVisual } from './components/ProjectVisual';
import { SiteHeader } from './components/SiteHeader';
import { projects } from './data/projects';

const capabilities = [
  { no: '01', title: 'Reports', list: 'Annual · Sustainability · ESG · Impact · Investor' },
  { no: '02', title: 'Presentations', list: 'Corporate · Investor · Pitch · Business · Systems' },
  { no: '03', title: 'Brand communication', list: 'Identity · Editorial · Brochures · Campaigns' },
  { no: '04', title: 'Digital', list: 'Websites · UI/UX · Interactive experiences' },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="eyebrow-row"><span>Visual designer</span><span>Mumbai, India</span></div>
        <h1 id="hero-title">Designing clarity<br />into complex<br />communication.</h1>
        <div className="hero-bottom"><p>Visual designer specialising in reports, presentations, brand communication and digital experiences.</p><a href="#selected-work">View selected work ↓</a></div>
      </section>
      <section className="selected-work" id="selected-work" aria-label="Selected work">
        {projects.map((project, index) => (
          <article className={`home-project home-project--${index % 3}`} key={project.slug} style={{ '--section-bg': index === 2 ? '#111111' : '#f1efe9', '--section-fg': index === 2 ? '#f4f2ec' : '#111111' } as React.CSSProperties}>
            <div className="project-kicker"><span>0{project.featuredOrder} / {project.label}</span><span>Demonstration project</span><span>{project.year}</span></div>
            <Link href={`/work/${project.slug}`} className="home-project__link" data-cursor="VIEW"><ProjectVisual project={project} variant={index % 2 ? 'system' : 'cover'} /><div className="project-heading"><div><p>{project.client}</p><h2>{project.title}</h2></div><span aria-hidden="true">↗</span></div></Link>
          </article>
        ))}
      </section>
      <section className="capabilities section-pad"><div className="section-label"><span>Capabilities</span><span>Visual communication across print and digital</span></div><div className="capability-list">{capabilities.map((item) => <div key={item.no}><span>{item.no}</span><h2>{item.title}</h2><p>{item.list}</p></div>)}</div></section>
      <section className="clients section-pad"><div className="section-label"><span>Selected demo clients</span><span>Fictional names for preview only</span></div><div className="client-marquee" aria-label="Demonstration clients"><span>Aster &amp; Field</span><span>Northstar Mutual</span><span>Meridian Futures</span><span>Common Thread</span><span>Vertex Studio</span><span>Lumen Works</span></div></section>
      <section className="about-preview section-pad"><span className="section-count">About / 01</span><div><h2>Visual design focused on making complex information easier to understand.</h2><p>I bring structure, hierarchy and a strong editorial eye to reports, presentations, brand communication and digital work—helping important ideas feel clear, credible and worth attention.</p><Link href="/about">More about me →</Link></div></section>
      <Footer />
    </main>
  );
}
