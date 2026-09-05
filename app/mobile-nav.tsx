'use client';

import { useEffect, useRef, useState } from 'react';
import { sitePath } from './site-paths';

type ActivePage = 'home' | 'about' | 'events' | 'team' | 'join' | 'donate';

const links: Array<{
  href: string;
  label: string;
  index: string;
  page?: ActivePage;
}> = [
  { href: '/', label: 'Home', index: '01', page: 'home' },
  { href: '/about', label: 'Our story', index: '02', page: 'about' },
  { href: '/#work', label: 'What we do', index: '03' },
  { href: '/team', label: 'Our team', index: '04', page: 'team' },
  { href: '/events', label: 'Events', index: '05', page: 'events' },
  { href: '/donate', label: 'Donate', index: '06', page: 'donate' },
];

export default function MobileNav({ active }: { active?: ActivePage }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add('mobile-menu-open');
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('mobile-menu-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((value) => !value)}
        ref={triggerRef}
      >
        <span />
        <span />
      </button>

      <button
        className="mobile-menu-scrim"
        type="button"
        aria-label="Close navigation"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />

      <div
        className="mobile-menu-panel"
        id="mobile-menu-panel"
        aria-hidden={!open}
        ref={panelRef}
      >
        <div className="mobile-menu-heading">
          <span>Explore BMEP</span>
          <span>Menu / 06</span>
        </div>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {links.map((link) => {
            const current = link.page ? active === link.page : false;
            return (
              <a
                key={link.label}
                href={sitePath(link.href)}
                className={current ? 'active' : undefined}
                aria-current={current ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{link.index}</span>
                <strong>{link.label}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            );
          })}
        </nav>
        <a
          className={`mobile-menu-cta ${active === 'join' ? 'active' : ''}`}
          href={sitePath('/join')}
          aria-current={active === 'join' ? 'page' : undefined}
          onClick={() => setOpen(false)}
        >
          <span>Volunteer with us</span>
          <strong>Join the movement</strong>
          <i aria-hidden="true">↗</i>
        </a>
      </div>
    </div>
  );
}
