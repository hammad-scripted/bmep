'use client';

import { useState, type CSSProperties, type KeyboardEvent } from 'react';

type Member = {
  name: string;
  role: string;
  photo?: string;
  collagePosition?: string;
};

type RoleGroup = {
  role: string;
  members: Member[];
};

type Department = {
  number: string;
  name: string;
  note: string;
  roles: RoleGroup[];
};

const leader: Member = {
  name: 'Nilesh',
  role: 'Head Coordinator',
  photo: '/team/nilesh.webp',
};

const executive: Member[] = [
  { name: 'Akash', role: 'General Secretary', photo: '/team/akash.webp' },
  { name: 'Amar', role: 'Associate General Secretary', collagePosition: '86.1% 14.96%' },
  { name: 'Utkarsh', role: 'Treasurer', photo: '/team/utkarsh.webp' },
  { name: 'Bidya', role: 'Convener', photo: '/team/bidya.webp' },
  { name: 'Pallavi', role: 'Deputy Treasurer', collagePosition: '11.63% 34.75%' },
];

const departments: Department[] = [
  {
    number: '01',
    name: 'Classroom & mentoring',
    note: 'Guiding learners through preparation, practice, and patient support.',
    roles: [
      {
        role: 'JNV Heads',
        members: [
          { name: 'Satyabhama', role: 'JNV Head', photo: '/team/satyabhama.webp' },
          { name: 'Sujoy', role: 'JNV Head', collagePosition: '48.51% 34.75%' },
        ],
      },
      {
        role: 'Exam Heads',
        members: [
          { name: 'Likhitha', role: 'Exam Head', collagePosition: '4.04% 74.61%' },
          { name: 'Shivam', role: 'Exam Head', photo: '/team/shivam.webp' },
        ],
      },
      {
        role: 'Admission Heads',
        members: [
          { name: 'Yash', role: 'Admission Head', collagePosition: '40.28% 74.61%' },
          { name: 'Gayatri', role: 'Admission Head', collagePosition: '58.72% 74.61%' },
        ],
      },
    ],
  },
  {
    number: '02',
    name: 'Community & events',
    note: 'Creating safe, joyful spaces to learn, play, perform, and belong.',
    roles: [
      {
        role: 'Girls Coordinators',
        members: [
          { name: 'Bhashitha', role: 'Girls Coordinator', collagePosition: '67.02% 34.75%' },
          { name: 'Roshini', role: 'Girls Coordinator', photo: '/team/roshini.webp' },
        ],
      },
      {
        role: 'Boys Coordinators',
        members: [
          { name: 'Abdus', role: 'Boys Coordinator', photo: '/team/abdus.webp' },
          { name: 'Abhijeet', role: 'Boys Coordinator', collagePosition: '22.34% 54.96%' },
        ],
      },
      {
        role: 'Event Heads',
        members: [
          { name: 'Pujitha', role: 'Event Head', collagePosition: '77.38% 54.96%' },
          { name: 'Aryan', role: 'Event Head', photo: '/team/aryan.webp' },
        ],
      },
    ],
  },
  {
    number: '03',
    name: 'Communication',
    note: 'Carrying the work outward with clarity, warmth, and purpose.',
    roles: [
      {
        role: 'PR & Outreach Heads',
        members: [
          { name: 'Shakya', role: 'PR & Outreach Head', collagePosition: '40.28% 54.96%' },
          { name: 'Tanya', role: 'PR & Outreach Head', collagePosition: '58.72% 54.96%' },
        ],
      },
      {
        role: 'Social Media Heads',
        members: [
          { name: 'Shikha', role: 'Social Media Head', collagePosition: '77.38% 74.61%' },
          { name: 'Manish', role: 'Social Media Head', photo: '/team/manish.webp' },
        ],
      },
      {
        role: 'Public Relations Heads',
        members: [
          { name: 'Abhay', role: 'Public Relations Head', photo: '/team/abhay.webp' },
          { name: 'Manjusri', role: 'Public Relations Head', collagePosition: '96.45% 94.33%' },
        ],
      },
    ],
  },
  {
    number: '04',
    name: 'Creative & digital',
    note: 'Giving the project a visual voice and building the tools behind it.',
    roles: [
      {
        role: 'Graphic Design Heads',
        members: [
          { name: 'Shaista', role: 'Graphic Design Head', photo: '/team/shaista.webp' },
          { name: 'Mampi', role: 'Graphic Design Head', photo: '/team/mampi.webp' },
        ],
      },
      {
        role: 'Tech & WebD Heads',
        members: [
          { name: 'Apoorv', role: 'Tech & WebD Head', collagePosition: '4.04% 94.33%' },
          { name: 'Rahul', role: 'Tech & WebD Head', photo: '/team/rahul.webp' },
        ],
      },
    ],
  },
];

const batches = [
  { id: '2026', label: '2026', detail: 'Current team' },
  { id: '2025', label: '2025', detail: 'Previous batch' },
  { id: '2024', label: '2024', detail: 'Previous batch' },
];

function Portrait({ member }: { member: Member }) {
  if (member.photo) {
    return (
      <span className="team-avatar">
        <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" />
      </span>
    );
  }

  const style = {
    backgroundPosition: member.collagePosition,
  } as CSSProperties;

  return (
    <span
      className="team-avatar team-avatar-collage"
      style={style}
      role="img"
      aria-label={`Portrait of ${member.name}`}
    />
  );
}

function PersonCard({ member, className = '' }: { member: Member; className?: string }) {
  return (
    <article className={`person-card ${className}`}>
      <Portrait member={member} />
      <div>
        <p>{member.role}</p>
        <h3>{member.name}</h3>
      </div>
    </article>
  );
}

function CurrentTeamTree() {
  return (
    <div className="org-tree" aria-label="BMEP 2026 team hierarchy">
      <div className="tree-key">
        <span>Leadership</span>
        <span>Working teams</span>
      </div>

      <div className="tree-root">
        <PersonCard member={leader} className="person-card-lead" />
      </div>

      <section className="executive-section" aria-labelledby="executive-title">
        <div className="tree-section-heading">
          <span>Core council</span>
          <h2 id="executive-title">Executive leadership</h2>
        </div>
        <div className="executive-council">
          {executive.map((member) => (
            <PersonCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="department-section" aria-labelledby="departments-title">
        <div className="tree-section-heading">
          <span>Four connected branches</span>
          <h2 id="departments-title">Working teams</h2>
        </div>
        <div className="department-grid">
          {departments.map((department) => (
            <article className="department-branch" key={department.name}>
              <header>
                <span>{department.number}</span>
                <h3>{department.name}</h3>
                <p>{department.note}</p>
              </header>
              <div className="role-stack">
                {department.roles.map((group) => (
                  <section className="role-group" key={group.role}>
                    <h4>{group.role}</h4>
                    <div>
                      {group.members.map((member) => (
                        <PersonCard key={member.name} member={member} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function ArchivePanel({ year }: { year: string }) {
  return (
    <section className="batch-archive" aria-labelledby={`archive-${year}`}>
      <span>{year}</span>
      <div>
        <p className="kicker">Previous batch</p>
        <h2 id={`archive-${year}`}>This chapter is being digitised.</h2>
        <p>
          The place for this batch is ready. Names, roles, and portraits will be
          published once the record has been verified.
        </p>
      </div>
    </section>
  );
}

export default function TeamExplorer() {
  const [activeBatch, setActiveBatch] = useState('2026');

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tabs = Array.from(
      event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? [],
    );
    const currentIndex = tabs.indexOf(event.currentTarget);
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];
    if (nextTab) {
      nextTab.focus();
      setActiveBatch(nextTab.dataset.batch ?? '2026');
    }
  }

  return (
    <section className="team-explorer" aria-label="Team batches">
      <div className="batch-tabs-wrap section-wrap">
        <div className="batch-intro">
          <p className="kicker">Meet every batch</p>
          <p>Choose a year to move through BMEP’s student leadership archive.</p>
        </div>
        <div className="batch-tabs" role="tablist" aria-label="Select team batch">
          {batches.map((batch) => {
            const selected = activeBatch === batch.id;
            return (
              <button
                key={batch.id}
                id={`batch-tab-${batch.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`batch-panel-${batch.id}`}
                tabIndex={selected ? 0 : -1}
                data-batch={batch.id}
                onClick={() => setActiveBatch(batch.id)}
                onKeyDown={handleTabKey}
              >
                <strong>{batch.label}</strong>
                <span>{batch.detail}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="batch-panel section-wrap"
        key={activeBatch}
        id={`batch-panel-${activeBatch}`}
        role="tabpanel"
        aria-labelledby={`batch-tab-${activeBatch}`}
      >
        {activeBatch === '2026' ? <CurrentTeamTree /> : <ArchivePanel year={activeBatch} />}
      </div>
    </section>
  );
}
