import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CustomCursor } from './components/CustomCursor';
import { siteUrl } from './data/site';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Bivek Rai | Visual Designer', template: '%s | Bivek Rai' },
  description: 'Visual designer specialising in reports, presentations, brand communication and digital experiences.',
  keywords: ['visual designer', 'report designer', 'presentation designer', 'corporate communication', 'Mumbai'],
  alternates: { canonical: '/' },
  openGraph: { title: 'Bivek Rai | Visual Designer', description: 'Designing clarity into complex communication.', type: 'website', url: siteUrl, siteName: 'Bivek Rai', images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'Bivek Rai | Designing clarity into complex communication.' }] },
  twitter: { card: 'summary_large_image', title: 'Bivek Rai | Visual Designer', description: 'Designing clarity into complex communication.', images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><CustomCursor /><div id="main-content">{children}</div></body></html>;
}
