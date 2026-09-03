import ThemeToggle from './theme-toggle';

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteHeader({ active }: { active?: 'about' | 'events' | 'team' }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="BMEP home">
        <span className="wordmark-mark">B</span>
        <span>
          <strong>BMEP</strong>
          <small>Bihari More Education Project</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a className={active === 'about' ? 'active' : undefined} href="/about">Our story</a>
        <a href="/#work">What we do</a>
        <a className={active === 'team' ? 'active' : undefined} href="/team">Our team</a>
        <a className={active === 'events' ? 'active' : undefined} href="/events">Events</a>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <a className="header-cta" href="/#join">
          Join the movement <Arrow />
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="footer-brand">
        <span className="wordmark-mark">B</span>
        <div>
          <strong>Bihari More Education Project</strong>
          <p>Run by the students of NIT Durgapur.</p>
        </div>
      </div>
      <p className="footer-note">Learning, growing, and showing up for our community—every weekend.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
