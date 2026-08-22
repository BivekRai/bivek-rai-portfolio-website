import type { Metadata } from 'next';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = { title: 'Contact', description: 'Start a report, presentation, brand communication or digital project with Bivek Rai.' };
const whatsapp = 'https://wa.me/919002166977?text=Hi%20Bivek%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20design%20project.';

export default function ContactPage() {
  return <main className="contact-page" id="top"><SiteHeader light /><section className="contact-layout"><div className="contact-heading"><span>Contact / 03</span><h1>Let&apos;s work<br />together.</h1><p>Have an annual report, presentation, brand communication or digital project? Tell me what you&apos;re working on.</p></div><div className="contact-options"><div className="contact-status"><i /> Available for selected projects</div><a href="mailto:vibekchamling@gmail.com" data-cursor="OPEN ↗"><span>Write an email</span><strong>vibekchamling@gmail.com</strong><b>↗</b></a><a href={whatsapp} target="_blank" rel="noreferrer" data-cursor="OPEN ↗"><span>Start on WhatsApp</span><strong>+91 90021 66977</strong><b>↗</b></a><a href="https://www.linkedin.com/in/bivek-rai-054503260/" target="_blank" rel="noreferrer" data-cursor="OPEN ↗"><span>Connect professionally</span><strong>LinkedIn</strong><b>↗</b></a><div className="contact-meta"><span>Mumbai, India</span><span>Available for remote projects</span></div></div></section></main>;
}
