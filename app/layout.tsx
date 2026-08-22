import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CustomCursor } from './components/CustomCursor';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Bivek Rai — Visual Designer', template: '%s — Bivek Rai' },
  description: 'Visual designer specialising in reports, presentations, brand communication and digital experiences.',
  keywords: ['visual designer', 'report designer', 'presentation designer', 'corporate communication', 'Mumbai'],
  openGraph: { title: 'Bivek Rai — Visual Designer', description: 'Designing clarity into complex communication.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Bivek Rai — Visual Designer', description: 'Designing clarity into complex communication.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><CustomCursor /><div id="main-content">{children}</div></body></html>;
}
