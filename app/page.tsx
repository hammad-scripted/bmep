import ThemeToggle from './theme-toggle';

const focusAreas = [
  {
    number: '01',
    title: 'Weekend classrooms',
    text: 'Focused lessons, patient mentoring, and a welcoming place to learn every Saturday and Sunday.',
  },
  {
    number: '02',
    title: 'Student-led action',
    text: 'Students of NIT Durgapur turn what they know into time, care, and opportunity for young learners.',
  },
  {
    number: '03',
    title: 'Learning beyond books',
    text: 'Community events throughout the year create room for curiosity, confidence, creativity, and joy.',
  },
];

const eventTypes = [
  ['Learning', 'Weekly classes built around strong foundations and individual attention.'],
  ['Discovery', 'Science, art, culture, and play that help every child stay curious.'],
  ['Community', 'Seasonal initiatives that bring volunteers, families, and young learners together.'],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="BMEP home">
          <span className="wordmark-mark">B</span>
          <span>
            <strong>BMEP</strong>
            <small>Bihari More Education Project</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#story">Our story</a>
          <a href="#work">What we do</a>
          <a href="#events">Events</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-cta" href="#join">
            Join the movement <Arrow />
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="issue-line reveal reveal-1">
          <span>Student-led. Community-powered.</span>
          <span>NIT Durgapur · West Bengal</span>
          <span>Every Saturday &amp; Sunday</span>
        </div>

        <div className="hero-heading reveal reveal-2">
          <p className="kicker">The weekend edition</p>
          <h1>
            Every child deserves
            <em> more.</em>
          </h1>
        </div>

        <div className="hero-grid reveal reveal-3">
          <aside className="hero-note">
            <p>Our classroom opens</p>
            <strong>09:00</strong>
            <span>AM</span>
            <div className="vertical-rule" />
            <p>and the learning continues until noon.</p>
          </aside>

          <div className="hero-feature" aria-label="An abstract illustration of a weekend classroom">
            <div className="sun-disc" />
            <div className="chalkboard">
              <span>learn</span>
              <i>+</i>
              <span>grow</span>
            </div>
            <div className="student student-one"><span /></div>
            <div className="student student-two"><span /></div>
            <div className="student student-three"><span /></div>
            <p className="feature-caption">A small room can hold a world of possibility.</p>
          </div>

          <div className="hero-copy">
            <p className="drop-cap">
              On weekends, students from NIT Durgapur become teachers, mentors, and
              cheerleaders for children who deserve a fair chance to learn.
            </p>
            <p>
              BMEP is a student-run education initiative creating consistent,
              joyful learning experiences for underprivileged children.
            </p>
            <a className="text-link" href="#story">Read our story <Arrow /></a>
          </div>
        </div>

        <div className="news-ticker" aria-label="Programme schedule">
          <strong>Classroom bulletin</strong>
          <div className="ticker-track">
            <span>Saturday · 9 AM—12 PM</span>
            <i>◆</i>
            <span>Sunday · 9 AM—12 PM</span>
            <i>◆</i>
            <span>Learning with dignity, every weekend</span>
          </div>
        </div>
      </section>

      <section className="manifesto section-wrap" id="story">
        <div className="section-label"><span>Our point of view</span><span>Editorial / 01</span></div>
        <div className="manifesto-grid">
          <h2>Potential is everywhere.<br />Opportunity should be too.</h2>
          <div className="manifesto-copy">
            <p>
              Education is more than a lesson. It is the confidence to ask a
              question, the courage to imagine a different future, and the support
              to keep going.
            </p>
            <p>
              That belief brings our volunteers and learners together every week—
              and carries into every event we organise through the year.
            </p>
          </div>
        </div>
        <div className="facts" aria-label="BMEP programme facts">
          <div><strong>02</strong><span>Days every weekend</span></div>
          <div><strong>06</strong><span>Learning hours weekly</span></div>
          <div><strong>01</strong><span>Growing community</span></div>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-label section-label-light"><span>How we show up</span><span>The brief / 02</span></div>
        <div className="work-intro">
          <p className="kicker">More than a class</p>
          <h2>Consistency creates<br /><em>confidence.</em></h2>
        </div>
        <div className="focus-list">
          {focusAreas.map((area) => (
            <article key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="events section-wrap" id="events">
        <div className="section-label"><span>Throughout the year</span><span>Field notes / 03</span></div>
        <div className="events-heading">
          <h2>Big days.<br /><em>Bright minds.</em></h2>
          <p>
            Our calendar stretches beyond the weekend classroom with experiences
            that make learning social, expressive, and memorable.
          </p>
        </div>
        <div className="event-grid">
          {eventTypes.map(([title, description], index) => (
            <article key={title}>
              <div className={`event-art event-art-${index + 1}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <b>{title}</b>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="join" id="join">
        <p className="kicker">The next edition needs you</p>
        <h2>Bring an hour.<br />Leave an impact.</h2>
        <p>
          Teach, organise, document, design, or simply show up. There is always
          a way to make the circle wider.
        </p>
        <a href="#contact">I want to help <Arrow /></a>
        <div className="join-stamp" aria-hidden="true">BMEP<br /><span>Weekend<br />School</span></div>
      </section>

      <footer id="contact">
        <div className="footer-brand">
          <span className="wordmark-mark">B</span>
          <div><strong>Bihari More Education Project</strong><p>Run by the students of NIT Durgapur.</p></div>
        </div>
        <p className="footer-note">Contact and social links will be added with the next project update.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
