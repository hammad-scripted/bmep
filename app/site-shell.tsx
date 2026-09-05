import ThemeToggle from './theme-toggle';
import MobileNav from './mobile-nav';
import { sitePath } from './site-paths';

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteHeader({ active }: { active?: 'home' | 'about' | 'events' | 'team' | 'join' | 'donate' }) {
  return (
    <header className="site-header">
      <a className="wordmark" href={sitePath('/')} aria-label="BMEP home">
        <span className="wordmark-mark">B</span>
        <span>
          <strong>BMEP</strong>
          <small>Bihari More Education Project</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a className={active === 'about' ? 'active' : undefined} href={sitePath('/about')}>Our story</a>
        <a href={sitePath('/#work')}>What we do</a>
        <a className={active === 'team' ? 'active' : undefined} href={sitePath('/team')}>Our team</a>
        <a className={active === 'events' ? 'active' : undefined} href={sitePath('/events')}>Events</a>
        <a className={active === 'donate' ? 'active' : undefined} href={sitePath('/donate')}>Donate</a>
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <a className={`header-cta ${active === 'join' ? 'active' : ''}`} href={sitePath('/join')}>
          Join the movement <Arrow />
        </a>
        <MobileNav active={active} />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="wordmark-mark">B</span>
          <div>
            <strong>Bihari More Education Project</strong>
            <p>Run by the students of NIT Durgapur.</p>
          </div>
        </div>
        <p className="footer-note">Learning, growing, and showing up for our community—every weekend.</p>
        <div className="footer-socials" aria-label="BMEP social media">
          <a href="https://in.linkedin.com/company/bihari-more-education-project" target="_blank" rel="noreferrer">
            <span>in</span>LinkedIn
          </a>
          <span className="social-placeholder" aria-label="Instagram link coming soon">
            <b>ig</b>Instagram <small>Soon</small>
          </span>
          <span className="social-placeholder" aria-label="Facebook link coming soon">
            <b>f</b>Facebook <small>Soon</small>
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#top">Back to top ↑</a>
        <a
          className="designer-credit"
          href="https://hammad-scripted.github.io/terminal-portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Made by Hammad with <span aria-label="love">♥</span>
        </a>
      </div>
    </footer>
  );
}
