import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../site-shell';

export const metadata: Metadata = {
  title: 'Donate — Support BMEP',
  description: 'Support the Bihari More Education Project and help make learning more accessible.',
};

const supportAreas = [
  {
    number: '01',
    title: 'Learning materials',
    text: 'Books, notebooks, stationery, and classroom resources for young learners.',
  },
  {
    number: '02',
    title: 'Student activities',
    text: 'Workshops, competitions, celebrations, and experiences beyond the classroom.',
  },
  {
    number: '03',
    title: 'Education support',
    text: 'Practical assistance that helps students continue learning with confidence.',
  },
];

export default function DonatePage() {
  return (
    <main className="inner-page donate-page" id="top">
      <SiteHeader active="donate" />

      <section className="donate-hero section-wrap">
        <div className="section-label">
          <span>Support the classroom</span>
          <span>Giving / 01</span>
        </div>

        <div className="donate-hero-grid">
          <div className="donate-copy reveal reveal-1">
            <p className="kicker">A little support goes a long way</p>
            <h1>Give a little.<br />Open up <em>more.</em></h1>
            <p>
              Your contribution can help BMEP create consistent, joyful learning
              experiences for children in and around NIT Durgapur.
            </p>
            <div className="donate-trust-note">
              <span>Important</span>
              <p>Payment details are placeholders right now. Please do not send money until the verified UPI ID and QR code are published here.</p>
            </div>
          </div>

          <article className="donation-card reveal reveal-2" aria-label="Donation payment details placeholder">
            <div className="donation-card-heading">
              <span>Pay securely with UPI</span>
              <span>Details coming soon</span>
            </div>

            <div className="qr-placeholder" role="img" aria-label="QR code placeholder">
              <span>QR</span>
              <strong>Code placeholder</strong>
              <small>Your verified payment QR will appear here.</small>
            </div>

            <div className="upi-placeholder">
              <span>UPI ID</span>
              <code>your-upi-id@bank</code>
              <small>Placeholder — not active</small>
            </div>
          </article>
        </div>
      </section>

      <section className="donation-impact section-wrap">
        <div className="section-label section-label-light">
          <span>Where support can help</span>
          <span>Impact / 02</span>
        </div>
        <div className="donation-impact-heading">
          <p className="kicker">Every contribution has a purpose</p>
          <h2>Small acts.<br /><em>Shared possibility.</em></h2>
        </div>
        <div className="donation-impact-grid">
          {supportAreas.map((area) => (
            <article key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
