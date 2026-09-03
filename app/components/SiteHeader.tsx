'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname?.startsWith(`${href}/`));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${light ? 'site-header--light' : ''}`}>
        <Link className="wordmark wordmark--placeholder" href="/" aria-label="Bivek Rai home" onClick={() => setOpen(false)}>BR</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(({ href, label }) => <Link key={href} href={href} className={isActive(href) ? 'is-active' : undefined} aria-current={pathname === href ? 'page' : isActive(href) ? 'location' : undefined}>{label}</Link>)}
        </nav>
        <a className="cv-download" href="/downloads/bivek-rai-resume-2025.pdf" download="Bivek Rai Resume 2025.pdf">Download CV <span aria-hidden="true">↓</span></a>
        <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(current => !current)}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </header>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} id="mobile-navigation" aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map(({ href, label }) => <Link key={href} href={href} className={isActive(href) ? 'is-active' : undefined} aria-current={pathname === href ? 'page' : isActive(href) ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
        <div className="mobile-menu__footer">
          <a href="/downloads/bivek-rai-resume-2025.pdf" download="Bivek Rai Resume 2025.pdf" onClick={() => setOpen(false)}>Download CV ↓</a>
          <a href="https://www.linkedin.com/in/bivek-rai-054503260/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:vibekchamling@gmail.com">Email ↗</a>
        </div>
      </div>
    </>
  );
}
