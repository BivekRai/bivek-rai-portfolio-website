import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-label"><span>Have a project in mind?</span><span>Start a conversation</span></div>
      <Link className="footer-title" href="/contact">Let&apos;s make<br />something clear.<span>↗</span></Link>
      <div className="footer-links">
        <a href="mailto:vibekchamling@gmail.com">Email ↗</a>
        <a href="https://www.linkedin.com/in/bivek-rai-054503260/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://wa.me/919002166977?text=Hi%20Bivek%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20design%20project." target="_blank" rel="noreferrer">WhatsApp ↗</a>
      </div>
      <div className="footer-base"><span>© 2026 Bivek Rai</span><span>Visual designer · Mumbai</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
