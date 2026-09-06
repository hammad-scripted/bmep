'use client';

import { useState, type FormEvent } from 'react';

const departments = [
  'Biotechnology',
  'Chemical Engineering',
  'Chemistry',
  'Civil Engineering',
  'Computer Science & Engineering',
  'Electrical Engineering',
  'Electronics & Communication Engineering',
  'Humanities & Social Sciences',
  'Information Technology',
  'Management Studies',
  'Mathematics',
  'Mechanical Engineering',
  'Metallurgical & Materials Engineering',
  'Physics',
  'Other / Interdisciplinary',
];

const admissionYears = ['2025', '2026', '2027', '2028', '2029', '2030 or later'];

export default function JoinForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      'Hello BMEP team,',
      '',
      'I would like to join the movement.',
      '',
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone')}`,
      `Academic department: ${form.get('department')}`,
      `Admission year / batch: ${form.get('admissionYear')}`,
    ].join('\n');

    const mailto = new URL('mailto:bmep.dgp@gmail.com');
    mailto.searchParams.set('subject', 'BMEP volunteer application');
    mailto.searchParams.set('body', body);
    setPrepared(true);
    window.location.href = mailto.toString();
  }

  return (
    <form className="join-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Volunteer application</span>
        <span>All fields required</span>
      </div>

      <label>
        <span>Full name</span>
        <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
      </label>

      <div className="form-row">
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Phone number</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            minLength={8}
            required
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Academic department</span>
          <select name="department" defaultValue="" required>
            <option value="" disabled>Select your department</option>
            {departments.map((department) => (
              <option key={department} value={department}>{department}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Admission year / batch</span>
          <select name="admissionYear" defaultValue="" required>
            <option value="" disabled>Select your year</option>
            {admissionYears.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="form-privacy">
        Submitting prepares an email to BMEP. Your details are not stored by this website.
      </p>
      <button type="submit">
        <span>Prepare my application</span>
        <i aria-hidden="true">↗</i>
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {prepared ? 'Your email app should open with the application ready to send.' : ''}
      </p>
    </form>
  );
}
