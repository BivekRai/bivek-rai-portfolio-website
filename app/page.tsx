import Link from 'next/link';
import { ClientLogo } from './components/ClientLogo';
import { HeroVideo } from './components/HeroVideo';
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

const projectSurfaces: Record<string, { background: string; foreground: string }> = {
  'hdfc-ergo-integrated-report': { background: '#c9212b', foreground: '#fff8f3' },
  'india-rf-purposeful-investing': { background: '#17384c', foreground: '#f5f1e8' },
  'sisasss-legacy-of-change': { background: '#d5eaf0', foreground: '#102e3a' },
  'coromandel-consolidate-to-accelerate': { background: '#dec08c', foreground: '#16365f' },
  'coromandel-agility-in-action': { background: '#183c69', foreground: '#f5f1df' },
  'indo-farm-investor-deck-2023': { background: '#00a947', foreground: '#f7fff9' },
  'setco-efficient-engineering': { background: '#f6bd18', foreground: '#333333' },
  'third-wave-brand-positioning': { background: '#7a3000', foreground: '#fff4e9' },
  'epl-talent-driven-journey': { background: '#123f7c', foreground: '#f4fff2' },
  'adf-foods-navigating-global-shifts': { background: '#7c3f2b', foreground: '#fff7ee' },
  'ghial-redefining-aviation': { background: '#0c477f', foreground: '#f5fbff' },
  'india-rf-quarterly-report-december-2025': { background: '#d94a2b', foreground: '#fff8f2' },
  'india-rf-quarterly-report-september-2025': { background: '#263c50', foreground: '#fff3e9' },
  'india-rf-quarterly-report-june-2025': { background: '#d9dcdf', foreground: '#22384a' },
  'india-rf-quarterly-report-march-2025': { background: '#bfc1c3', foreground: '#202d38' },
  'india-rf-quarterly-report-december-2024': { background: '#23384a', foreground: '#f4f8fa' },
  'india-rf-quarterly-report-june-2024': { background: '#243a4e', foreground: '#f4f6f7' },
};

const clientNames = Array.from(new Set(projects.map((project) => project.client))).slice(0, 6);

const featuredProjects = [
  'coromandel-consolidate-to-accelerate',
  'hdfc-ergo-integrated-report',
  'ghial-redefining-aviation',
  'adf-foods-navigating-global-shifts',
  'india-rf-purposeful-investing',
  'sisasss-legacy-of-change',
].map((slug) => projects.find((project) => project.slug === slug)!);

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="hero hero--showcase" aria-labelledby="hero-title">
        <div className="eyebrow-row"><div className="hero-identity"><strong>Bivek Rai</strong><small>Visual designer</small></div><span>Mumbai, India</span></div>
        <div className="hero-showcase-layout">
          <div className="hero-copy">
            <h1 id="hero-title">Complex<br />stories.<br /><span>Clear design.</span></h1>
            <p>I turn complex information into visual communication that’s clear, engaging and built to connect.</p>
            <a className="hero-explore" href="#selected-work">Explore my work <span aria-hidden="true">↘</span></a>
            <div className="hero-disciplines">Reports · Presentations · Brand · Digital</div>
          </div>
          <HeroVideo />
        </div>
      </section>
      <section className="selected-work" id="selected-work" aria-label="Selected work">
        {featuredProjects.map((project, index) => {
          const companionVisual = project.heroOrientation === 'portrait'
            ? project.visuals.find((visual) => visual.src && visual.src !== project.heroImage)
            : undefined;
          const surface = projectSurfaces[project.slug] ?? project.theme;

          return (
            <article className={`home-project${companionVisual ? ' home-project--portrait-pair' : ''}`} key={project.slug} style={{ '--section-bg': surface.background, '--section-fg': surface.foreground } as React.CSSProperties}>
              <div className="project-kicker"><span>{String(index + 1).padStart(2, '0')} / {project.label}</span><span>{project.isDemo === false ? 'Selected work' : 'Demonstration project'}</span><span>{project.year}</span></div>
              <Link href={`/work/${project.slug}`} className="home-project__link" data-cursor="VIEW">
                {companionVisual ? (
                  <div className="home-project__visuals">
                    <ProjectVisual project={project} variant="cover" />
                    <ProjectVisual project={project} variant={companionVisual.variant} src={companionVisual.src} alt={companionVisual.alt} />
                  </div>
                ) : (
                  <ProjectVisual project={project} variant={index % 2 ? 'system' : 'cover'} />
                )}
                <div className="project-heading"><div><p>{project.client}</p><h2>{project.title}</h2></div><span aria-hidden="true">↗</span></div>
              </Link>
            </article>
          );
        })}
      </section>
      <div className="selected-work-more"><Link href="/work">View all work <span aria-hidden="true">↗</span></Link></div>
      <section className="capabilities section-pad"><div className="section-label"><span>Capabilities</span><span>Visual communication across print and digital</span></div><div className="capability-list">{capabilities.map((item) => <div key={item.no}><span>{item.no}</span><h2>{item.title}</h2><p>{item.list}</p></div>)}</div></section>
      <section className="clients section-pad"><div className="section-label"><span>Selected clients / projects</span><span>Supplied portfolio work</span></div><div className="client-marquee" aria-label="Selected clients and projects">{clientNames.map((client) => <div key={client}><ClientLogo client={client} /></div>)}</div></section>
      <section className="about-preview section-pad"><span className="section-count">About / 01</span><div><h2>A visual designer focused on making complex information easier to understand.</h2><p>I bring structure, hierarchy and a strong editorial eye to reports, presentations, brand communication and digital work, helping important ideas feel clear, credible and worth attention.</p><Link href="/about">More about me →</Link></div></section>
      <Footer />
    </main>
  );
}
