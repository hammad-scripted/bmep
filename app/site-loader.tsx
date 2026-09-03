'use client';

import { useEffect, useState } from 'react';

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    let leaveTimer = 0;
    let removeTimer = 0;
    let safetyTimer = 0;
    let dismissed = false;

    document.body.classList.add('site-is-loading');

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      const minimumDisplay = Math.max(0, 720 - (performance.now() - startedAt));
      leaveTimer = window.setTimeout(() => {
        setLeaving(true);
        document.body.classList.remove('site-is-loading');
        removeTimer = window.setTimeout(() => setVisible(false), 480);
      }, minimumDisplay);
    };

    if (document.readyState === 'complete') dismiss();
    else window.addEventListener('load', dismiss, { once: true });

    safetyTimer = window.setTimeout(dismiss, 3200);

    return () => {
      document.body.classList.remove('site-is-loading');
      window.removeEventListener('load', dismiss);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(safetyTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`site-loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-live="polite">
      <div className="site-loader-inner">
        <div className="loader-emblem" aria-hidden="true">
          <span>B</span>
          <i />
        </div>
        <div className="loader-copy">
          <strong>BMEP</strong>
          <span>Learning · Growing · Together</span>
        </div>
        <div className="loader-progress" aria-hidden="true"><i /></div>
        <span className="sr-only">Loading BMEP</span>
      </div>
    </div>
  );
}
