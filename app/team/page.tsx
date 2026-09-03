import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../site-shell';
import TeamExplorer from './team-explorer';

export const metadata: Metadata = {
  title: 'Our Team — BMEP',
  description:
    'Meet the student office bearers who lead BMEP’s teaching, mentoring, events, outreach, and creative work.',
};

export default function TeamPage() {
  return (
    <main className="inner-page team-page" id="top">
      <SiteHeader active="team" />

      <section className="team-hero section-wrap">
        <div className="section-label section-label-light">
          <span>The people behind the programme</span>
          <span>Office bearers / 2026</span>
        </div>
        <div className="team-hero-grid">
          <div className="team-hero-copy">
            <p className="kicker">Students who keep showing up</p>
            <h1>
              Many roles.<br />One shared <em>promise.</em>
            </h1>
            <p>
              From the weekend classroom to the college stage, this team turns
              care into consistent action.
            </p>
          </div>
          <figure className="team-board">
            <img
              src="/team/office-bearers-2026.jpeg"
              alt="BMEP office bearers for 2026, showing all members with their designations"
            />
            <figcaption>
              <span>Office bearers ’26</span>
              <span>28 students · one team</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <TeamExplorer />
      <SiteFooter />
    </main>
  );
}
