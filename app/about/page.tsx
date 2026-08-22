import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = { title: 'About', description: 'About Bivek Rai, a visual designer focused on clear corporate communication across print and digital.' };

export default function AboutPage() {
  return <main id="top"><SiteHeader /><header className="about-hero page-hero"><span>About / 02</span><h1>I design communication that makes complex ideas clearer.</h1></header><section className="about-statement section-pad"><span>Approach</span><div><p>My work sits where information, identity and storytelling meet. I use editorial thinking to give complex content a clear order, a confident voice and a visual rhythm that keeps people engaged.</p><p>Across reports, presentations, brand communication and digital experiences, the aim stays the same: make the message easier to understand without making it feel ordinary.</p></div></section><section className="expertise section-pad"><div className="section-label"><span>Expertise</span><span>Four connected disciplines</span></div>{['Report design','Presentation design','Brand communication','Digital design'].map((item, index) => <div key={item}><span>0{index + 1}</span><h2>{item}</h2></div>)}</section><section className="about-tools section-pad"><span>Tools, kept secondary</span><p>Adobe InDesign · Illustrator · Photoshop · PowerPoint · Figma · After Effects</p><p>HTML · CSS · JavaScript · Next.js · AI-assisted workflows</p></section><section className="inline-cta section-pad"><p>Have a communication challenge?</p><Link href="/contact">Let&apos;s talk →</Link></section><Footer /></main>;
}
