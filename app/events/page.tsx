import type { Metadata } from 'next';
import { Arrow, SiteFooter, SiteHeader } from '../site-shell';

export const metadata: Metadata = {
  title: 'Events — BMEP',
  description: 'A photo archive of the workshops, celebrations, competitions, and community initiatives organised by BMEP.',
};

const events = [
  {
    number: '01',
    slug: 'daan-utsav',
    title: 'Daan Utsav',
    label: 'Giving / Education',
    description: 'Daan Utsav is an initiative where we collect donations to support underprivileged children in their education. Along with community fundraising through platforms such as Milaap, these funds help with school fees, stationery, educational materials, and student activities—so financial difficulty does not become a barrier to learning.',
    images: ['/events/daan-utsav-1.png', '/events/daan-utsav-2.jpg'],
    alts: ['Children’s artwork displayed at a BMEP exhibition', 'BMEP volunteers together at the event display'],
  },
  {
    number: '02',
    slug: 'brighter-tomorrow',
    title: 'Brighter Tomorrow',
    label: 'Guidance / Aspirations',
    description: 'Brighter Tomorrow, organised in collaboration with our college’s Debating Society, focuses on understanding children’s dreams and aspirations. We encourage them to share what they want to become in the future and guide them with motivation, career awareness, and practical direction.',
    images: ['/events/brighter-tomorrow-1.png', '/events/brighter-tomorrow-2.png'],
    alts: ['BMEP volunteers gathered in a lecture hall', 'Children and volunteers participating in a guided session'],
  },
  {
    number: '03',
    slug: 'bmep-quiz',
    title: 'BMEP Quiz',
    label: 'Curiosity / Learning',
    description: 'The BMEP Quiz, organised in collaboration with our college’s Quizzing Club, gives children a fun and engaging learning experience. Through quizzes and healthy competition, we encourage curiosity, general knowledge, and confidence. Winners and participants are recognised with prizes to motivate them to keep learning.',
    images: ['/events/bmep-quiz-1.png', '/events/bmep-quiz-2.webp'],
    alts: ['A quiz session underway in a BMEP classroom', 'Children, students, and volunteers gathered for the BMEP Quiz'],
  },
  {
    number: '04',
    slug: 'anubhav',
    title: 'Anubhav',
    label: 'Art / Craft',
    description: 'Anubhav, organised in collaboration with SPIC MACAY, is an art and craft workshop that encourages children to explore their creativity and imagination. Through hands-on activities, children learn new techniques, express themselves freely, and receive appreciation through prizes and recognition.',
    images: ['/events/anubhav-1.jpg', '/events/anubhav-2.jpg'],
    alts: ['Children and volunteers taking part in the Anubhav craft workshop', 'Children holding the crafts they created during Anubhav'],
  },
  {
    number: '05',
    slug: 'dance-workshop',
    title: 'Dance Workshop',
    label: 'Movement / Expression',
    description: 'The Dance Workshop, organised in collaboration with the Dance Club of our college, introduces children to the joy of dance and creative expression. Children learn basic movements and routines in an interactive environment while building confidence, discipline, teamwork, and self-expression.',
    images: ['/events/dance-workshop-1.jpg', '/events/dance-workshop-2.webp'],
    alts: ['Children practising a dance routine together', 'The Dance Club and BMEP community gathered after the workshop'],
  },
  {
    number: '06',
    slug: 'sports-day',
    title: 'Sports Day',
    label: 'Play / Teamwork',
    description: 'BMEP Sports Day promotes physical fitness, teamwork, and sportsmanship. Children participate in Cricket, Kabaddi, Kho-Kho, and other games, finding an enjoyable place to play, compete, and build confidence. Prizes celebrate their participation and encourage them to stay active.',
    images: ['/events/sports-day-1.jpg', '/events/sports-day-2.png'],
    alts: ['Children playing a team game on the sports court', 'Sports Day participants receiving recognition from volunteers'],
  },
  {
    number: '07',
    slug: 'janmashtami-drawing',
    title: 'Janmashtami Drawing Competition',
    label: 'Festival / Imagination',
    description: 'The Janmashtami Drawing Competition gives children an opportunity to showcase their artistic talent and creativity. Participants create drawings inspired by Janmashtami, expressing their imagination while celebrating the festival. The best artworks are recognised with prizes.',
    images: ['/events/janmashtami-drawing-1.png', '/events/janmashtami-drawing-2.png'],
    alts: ['A volunteer helping a child with a Janmashtami drawing', 'Children proudly showing their finished drawings'],
  },
  {
    number: '08',
    slug: 'tech-mela',
    title: 'Projects in Tech Mela',
    label: 'Science / Innovation',
    description: 'As part of Tech Mela during Aarohan, BMEP gives children a platform to showcase their science projects. They present ideas, demonstrate scientific concepts, and share their creativity with others—building curiosity, innovation, and confidence in their ability to create and learn.',
    images: ['/events/tech-mela-1.jpg', '/events/tech-mela-2.jpg'],
    alts: ['A child explaining a science project to Tech Mela visitors', 'BMEP students presenting water-cycle and water-alarm models'],
  },
  {
    number: '09',
    slug: 'aarohan-performance',
    title: 'Dance & Skit at Aarohan',
    label: 'Stage / Confidence',
    description: 'At Aarohan, children from BMEP perform dance and skits in front of the college community. The event gives them a larger stage to showcase their talent in dance and acting while building confidence, creativity, and stage presence. It is a celebration of their abilities and expression.',
    images: ['/events/aarohan-performance-1.jpg', '/events/aarohan-performance-2.png'],
    alts: ['Children and volunteers gathered during Aarohan', 'BMEP children performing on the Aarohan stage'],
  },
  {
    number: '10',
    slug: 'luminous',
    title: 'Luminous',
    label: 'Diwali / Purpose',
    description: 'The Diya Painting Workshop, organised with EDC during Diwali, lets BMEP children celebrate through creativity. The decorated diyas are sold during the festive season, and the funds are used to provide educational and study materials for underprivileged students—turning creativity into meaningful support.',
    images: ['/events/luminous-1.webp', '/events/luminous-2.jpg'],
    alts: ['Children painting and decorating diyas together', 'A child proudly holding a painted diya'],
  },
];

const overviewImages = [
  ['/events/community-volunteers.png', 'BMEP student volunteers together'],
  ['/events/community-gathering.png', 'Children and volunteers gathered in a lecture hall'],
  ['/events/events-overview-1.jpg', 'Children gathered for a BMEP community event'],
  ['/events/events-overview-2.jpg', 'A lively BMEP craft activity'],
];

const continuingProgrammes = [
  ['Children’s Day', 'A day of celebration centred on the children and their joy.'],
  ['Health & sanitation camps', 'Annual check-ups and health awareness work with regional hospitals.'],
  ['Educational trips', 'Learning experiences that take curiosity beyond the classroom.'],
  ['Club collaborations', 'College clubs bring new skills, mentors, and creative opportunities.'],
];

export default function EventsPage() {
  return (
    <main className="inner-page events-page" id="top">
      <SiteHeader active="events" />

      <section className="events-hero section-wrap">
        <div className="section-label"><span>The event archive</span><span>Field notes / 2025</span></div>
        <div className="events-hero-grid">
          <div>
            <p className="kicker">Beyond the weekend classroom</p>
            <h1>Big days.<br /><em>Bright minds.</em></h1>
          </div>
          <div className="events-hero-copy">
            <p>Learning becomes unforgettable when children get space to create, compete, perform, experiment, and celebrate together.</p>
            <span>10 stories · 24 photographs · one growing community</span>
          </div>
        </div>
        <div className="overview-mosaic" aria-label="A selection of photographs from BMEP events">
          {overviewImages.map(([src, alt], index) => (
            <figure key={src} className={`overview-photo overview-photo-${index + 1}`}>
              <img src={src} alt={alt} />
            </figure>
          ))}
        </div>
      </section>

      <nav className="event-index section-wrap" aria-label="Event index">
        <p>Jump to an event</p>
        <div>
          {events.map((event) => <a key={event.slug} href={`#${event.slug}`}><span>{event.number}</span>{event.title}</a>)}
        </div>
      </nav>

      <section className="event-stories">
        {events.map((event) => (
          <article className="event-story section-wrap" id={event.slug} key={event.slug}>
            <div className="event-story-copy">
              <div className="story-meta"><span>{event.number} / 10</span><span>{event.label}</span></div>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <a href="#top">Return to index <Arrow /></a>
            </div>
            <div className="event-photo-pair">
              {event.images.map((src, index) => (
                <figure key={src} className={`event-photo event-photo-${index + 1}`}>
                  <img src={src} alt={event.alts[index]} loading="lazy" decoding="async" />
                  <figcaption>{event.title} · {String(index + 1).padStart(2, '0')}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="programme-strip section-wrap">
        <div className="section-label section-label-light"><span>Also part of BMEP</span><span>The wider programme</span></div>
        <div className="programme-grid">
          {continuingProgrammes.map(([title, text], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="events-closing">
        <p className="kicker">The story keeps moving</p>
        <h2>Every event is another<br />way to <em>believe.</em></h2>
        <a href="/about">Discover how BMEP began <Arrow /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
