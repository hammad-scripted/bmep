import type { Metadata } from 'next';
import Image from 'next/image';
import { Arrow, SiteFooter, SiteHeader } from '../site-shell';
import { sitePath } from '../site-paths';

export const metadata: Metadata = {
  title: 'Results & Achievements — BMEP',
  description: 'Student milestones and community achievements from the Bihari More Education Project.',
};

const studentMilestones = [
  { number: '01', name: 'Kajal Kumari', result: 'JNV entrance selection', pathway: 'Jawahar Navodaya Vidyalaya' },
  { number: '02', name: 'Ritik Rajak', result: 'GFTI admission', pathway: 'Government Funded Technical Institute' },
  { number: '03', name: 'Rishi Raj', result: 'JNV entrance selection', pathway: 'Jawahar Navodaya Vidyalaya' },
  { number: '04', name: 'Shatarup Aruk', result: 'JNV entrance selection', pathway: 'Jawahar Navodaya Vidyalaya' },
  { number: '05', name: 'Aryan Raj', result: 'JNV entrance selection', pathway: 'Jawahar Navodaya Vidyalaya' },
];

const widerAchievements = [
  {
    number: '01',
    title: 'Ideas on display',
    label: 'Tech Mela / Academic projects',
    text: 'Students take their learning into public view at Tech Mela, presenting projects and explaining ideas to visitors.',
    image: '/achievements/tech-mela.jpg',
    alt: 'BMEP children presenting a solar-system project to visitors at Tech Mela',
    width: 1639,
    height: 1229,
  },
  {
    number: '02',
    title: 'Confidence on stage',
    label: 'Aarohan / Dance & acting',
    text: 'Performances at Aarohan give children room to express themselves, work as a team, and experience a larger stage.',
    image: '/achievements/aarohan-stage.jpg',
    alt: 'BMEP children performing a dance on the Aarohan stage',
    width: 960,
    height: 540,
  },
  {
    number: '03',
    title: 'Care beyond class',
    label: 'Health / Sanitation',
    text: 'Annual medical and sanitation camps connect children and families with general check-ups and health awareness.',
    image: '/achievements/medical-camp.jpg',
    alt: 'Volunteers and healthcare partners at a BMEP medical camp',
    width: 1120,
    height: 840,
  },
];

const impactAreas = [
  ['Prepared pathways', 'Focused support for JNV and other competitive admission journeys.'],
  ['Creative confidence', 'Projects, performance, art, sport, and opportunities to be seen and heard.'],
  ['Community wellbeing', 'Medical check-ups and sanitation awareness alongside academic mentoring.'],
  ['Practical support', 'Fundraising for school fees, stationery, student activities, and community initiatives.'],
];

export default function AchievementsPage() {
  return (
    <main className="inner-page achievements-page" id="top">
      <SiteHeader active="achievements" />

      <section className="achievements-hero section-wrap">
        <div className="section-label">
          <span>Results & achievements</span>
          <span>Orientation record / 2026</span>
        </div>

        <div className="achievements-hero-grid">
          <div className="reveal reveal-1">
            <p className="kicker">What steady support can become</p>
            <h1>Small steps.<br /><em>Real futures.</em></h1>
          </div>
          <div className="achievements-intro reveal reveal-2">
            <p>
              Results matter most when they open the next door. From entrance
              selections to science showcases, BMEP celebrates every sign of
              confidence, curiosity, and growing possibility.
            </p>
            <span>Learning · opportunity · wellbeing</span>
          </div>
        </div>

        <figure className="achievements-hero-photo reveal reveal-3">
          <Image
            src={sitePath('/achievements/community-gathering.jpg')}
            alt="A large gathering of BMEP children, volunteers, and community members"
            width={1613}
            height={1210}
            sizes="(max-width: 640px) 100vw, 90vw"
            priority
          />
          <figcaption>
            <span>A growing learning community</span>
            <span>From the BMEP Orientation 2026 archive</span>
          </figcaption>
        </figure>
      </section>

      <section className="results-summary" aria-label="Results summary">
        <article>
          <strong>05</strong>
          <span>Named student milestones in the orientation record</span>
        </article>
        <article>
          <strong>02</strong>
          <span>Education pathways represented: JNV and GFTI</span>
        </article>
        <article>
          <strong>01</strong>
          <span>Shared purpose: help every learner take the next step</span>
        </article>
      </section>

      <section className="student-results section-wrap">
        <div className="student-results-heading">
          <div>
            <p className="kicker">Student milestones</p>
            <h2>Names behind<br />the <em>numbers.</em></h2>
          </div>
          <p>
            The 2026 orientation deck records the following selections and
            admissions. We are publishing them by name while keeping the page
            ready for dates and future verified results.
          </p>
        </div>

        <div className="milestone-list">
          {studentMilestones.map((student) => (
            <article key={student.name}>
              <span>{student.number}</span>
              <h3>{student.name}</h3>
              <div>
                <strong>{student.result}</strong>
                <small>{student.pathway}</small>
              </div>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="achievement-stories section-wrap">
        <div className="section-label section-label-light">
          <span>Beyond exam results</span>
          <span>Whole-child progress</span>
        </div>
        <div className="achievement-stories-heading">
          <p className="kicker">Success has more than one shape</p>
          <h2>Learning that<br /><em>shows up.</em></h2>
        </div>

        <div className="achievement-story-grid">
          {widerAchievements.map((achievement) => (
            <article key={achievement.title}>
              <figure>
                <Image
                  src={sitePath(achievement.image)}
                  alt={achievement.alt}
                  width={achievement.width}
                  height={achievement.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                  loading="lazy"
                />
                <figcaption>{achievement.number} / 03</figcaption>
              </figure>
              <span>{achievement.label}</span>
              <h3>{achievement.title}</h3>
              <p>{achievement.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-ledger section-wrap">
        <div className="impact-ledger-heading">
          <p className="kicker">The wider result</p>
          <h2>Progress, from the<br />classroom <em>outward.</em></h2>
        </div>
        <div className="impact-ledger-list">
          {impactAreas.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="results-source-note">
          Source note: outcomes and programme highlights on this page are drawn
          from the BMEP Orientation 2026 presentation. Dates and supporting
          records can be added as the public results archive grows.
        </p>
      </section>

      <section className="achievements-cta">
        <p className="kicker">Help write the next result</p>
        <h2>Show up for<br /><em>their next step.</em></h2>
        <div>
          <a href={sitePath('/join')}>Join the movement <Arrow /></a>
          <a href={sitePath('/donate')}>Support BMEP <Arrow /></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
