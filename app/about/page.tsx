import type { Metadata } from 'next';
import { Arrow, SiteFooter, SiteHeader } from '../site-shell';

export const metadata: Metadata = {
  title: 'How BMEP Was Made — BMEP',
  description: 'The story of how a small student-led teaching effort at NIT Durgapur grew into the Bihari More Education Project.',
};

export default function AboutPage() {
  return (
    <main className="inner-page about-page" id="top">
      <SiteHeader active="about" />

      <section className="about-hero section-wrap">
        <div className="section-label section-label-light"><span>Our origin story</span><span>Chapter / 01</span></div>
        <div className="about-title">
          <p className="kicker">How was BMEP made?</p>
          <h1>One student<br />chose to <em>teach.</em></h1>
          <p className="about-deck">Then another joined. And another. A small act of care became a learning community.</p>
        </div>
      </section>

      <section className="origin-intro section-wrap">
        <p className="origin-lead">BMEP—Bihari More Education Project—is a student-led initiative of NIT Durgapur built on a simple belief:</p>
        <blockquote>Every child deserves the opportunity to learn, grow, and dream without limitations.</blockquote>
      </section>

      <section className="origin-facts section-wrap" aria-label="BMEP history and programme facts">
        <article><span>The founder</span><strong>Harsh Vardhan Singh</strong><p>IT, Batch of 2006–2010</p></article>
        <article><span>Faculty advisor</span><strong>Dr Joydeep Banerjee</strong><p>Associate Professor, NIT Durgapur</p></article>
        <article><span>Classroom rhythm</span><strong>Sat + Sun</strong><p>9:00 AM to 12:00 PM</p></article>
      </section>

      <section className="origin-chapters section-wrap">
        <article>
          <span>01</span>
          <h2>A need,<br />noticed.</h2>
          <div>
            <p>The idea behind BMEP began with a group of students who noticed that many children in the surrounding communities had limited access to educational support. They wanted to do something meaningful with their time and knowledge.</p>
            <p>What started as a small effort to teach a few children after college hours gradually grew into a dedicated mentoring project led by student volunteers with a shared purpose.</p>
          </div>
        </article>
        <article>
          <span>02</span>
          <h2>Weekends,<br />shared.</h2>
          <div>
            <p>Today, every Saturday and Sunday, students from NIT Durgapur volunteer their time to conduct classes for children from nearby communities.</p>
            <p>Through regular lessons, activities, interaction, and mentorship, BMEP strives to make learning more accessible, engaging, and enjoyable.</p>
          </div>
        </article>
        <article>
          <span>03</span>
          <h2>Beyond the<br />textbook.</h2>
          <div>
            <p>BMEP is not just about teaching subjects from a textbook. It is about building confidence, encouraging curiosity, and helping children discover their own potential.</p>
            <p>It is about creating an environment where children can ask questions freely, explore new ideas, and look at education as a pathway to a brighter future.</p>
          </div>
        </article>
        <article>
          <span>04</span>
          <h2>Growing,<br />together.</h2>
          <div>
            <p>At the same time, BMEP gives college students an opportunity to step outside the classroom and contribute to the community around them.</p>
            <p>Every volunteer brings something different, but together they create something much bigger—a learning community built on education, empathy, and collective effort.</p>
          </div>
        </article>
      </section>

      <section className="jnv-callout section-wrap">
        <div>
          <p className="kicker">A focused pathway</p>
          <h2>Preparing for<br /><em>possibility.</em></h2>
        </div>
        <div>
          <p>BMEP supports students preparing for entrance examinations to government-funded schools such as Jawahar Navodaya Vidyalaya and Kendriya Vidyalaya.</p>
          <p>JNV preparation places special emphasis on English and Mathematics, helping rural learners strengthen their foundations and approach national-level examinations with confidence.</p>
        </div>
      </section>

      <section className="journey-callout">
        <p>Our journey continues.</p>
        <h2>Every weekend is another opportunity to learn, teach, connect, and make a difference.</h2>
      </section>

      <section className="origin-closing section-wrap">
        <div className="closing-statement">
          <span>What we believe</span>
          <p>Change does not always have to begin with something extraordinary.</p>
        </div>
        <div className="closing-lines">
          <p>Sometimes, it begins with <strong>one student</strong> choosing to teach,</p>
          <p><strong>one child</strong> choosing to learn,</p>
          <p>and <strong>a community</strong> choosing to grow together.</p>
        </div>
        <div className="this-is-bmep">
          <p className="kicker">This is BMEP</p>
          <h2>A small step towards making education a little more accessible, <em>one child at a time.</em></h2>
          <a href="/events">See BMEP in action <Arrow /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
