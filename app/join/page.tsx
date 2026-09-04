import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../site-shell';
import JoinForm from './join-form';

export const metadata: Metadata = {
  title: 'Join the Movement — BMEP',
  description: 'Volunteer with the Bihari More Education Project at NIT Durgapur.',
};

export default function JoinPage() {
  return (
    <main className="inner-page join-page" id="top">
      <SiteHeader active="join" />

      <section className="join-page-hero section-wrap">
        <div className="section-label">
          <span>Become a BMEP volunteer</span>
          <span>Application / 01</span>
        </div>
        <div className="join-page-grid">
          <div className="join-page-copy reveal reveal-1">
            <p className="kicker">Bring your time and curiosity</p>
            <h1>Show up.<br />Teach. <em>Grow.</em></h1>
            <p>
              You do not need to have taught before. Bring patience, consistency,
              and the willingness to learn alongside the children.
            </p>
            <div className="join-promise" aria-label="What volunteering looks like">
              <span>01</span><strong>Weekend classrooms</strong>
              <span>02</span><strong>Events and outreach</strong>
              <span>03</span><strong>Creative and digital work</strong>
            </div>
          </div>
          <div className="reveal reveal-2">
            <JoinForm />
          </div>
        </div>
      </section>

      <section className="join-page-note">
        <p>One hour can become a habit.</p>
        <strong>A habit can become an impact.</strong>
      </section>

      <SiteFooter />
    </main>
  );
}
