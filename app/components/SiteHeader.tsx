'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function SiteHeader({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${light ? 'site-header--light' : ''}`}>
        <Link className="wordmark" href="/" aria-label="Bivek Rai home" onClick={() => setOpen(false)}>BIVEK RAI</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
        </nav>
        <span className="availability">Available for selected projects <i /></span>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </header>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
        <div className="mobile-menu__footer">
          <a href="https://www.linkedin.com/in/bivek-rai-054503260/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:vibekchamling@gmail.com">Email ↗</a>
        </div>
      </div>
    </>
  );
}
