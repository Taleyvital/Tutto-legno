'use client';

import TLMonogram from './TLMonogram';

const COLS = [
  { title: 'Services',   links: ['Portes & fenêtres', 'Mobilier sur mesure', 'Escaliers', 'Parquet & revêtements'] },
  { title: 'Entreprise', links: ['Nos réalisations', 'À propos', 'Atelier', 'Contact'] },
  { title: 'Contact',    links: ["Abidjan, CI", '+225 00 00 00 00', 'Tuttolegn00@gmail.com', 'Lun–Ven 8h–17h'] },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0E0C0A', padding: '64px 80px 40px', borderTop: '1px solid rgba(201,168,130,0.1)' }}>
      <div className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <TLMonogram size={96} />
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5EFE6', whiteSpace: 'nowrap' }}>TUTTO LEGNO</span>
          </div>
          <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: '#7A7470', maxWidth: 280 }}>
            Menuiserie bois massif haut de gamme.<br />Abidjan, Côte d&apos;Ivoire.
          </p>
          <div style={{ marginTop: 20, fontSize: 10, fontWeight: 300, letterSpacing: '0.06em', color: '#3E3A36', fontStyle: 'italic' }}>
            &quot;Nous faisons de vos rêves une réalité.&quot;
          </div>
        </div>

        {COLS.map(col => (
          <div key={col.title}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A67C52', marginBottom: 16 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 12, fontWeight: 400, color: '#7A7470', textDecoration: 'none', transition: 'color 300ms ease-out' }}
                    onMouseEnter={e => e.target.style.color = '#C9A882'}
                    onMouseLeave={e => e.target.style.color = '#7A7470'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 24 }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'lowercase', color: '#7A7470', whiteSpace: 'nowrap' }}>follow us</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { href: '#', label: 'Facebook', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
            { href: '#', label: 'Instagram', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
            { href: '#', label: 'YouTube', icon: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0E0C0A"/></> },
            { href: '#', label: 'LinkedIn', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
            { href: '#', label: 'Pinterest', icon: <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.26-5.33 1.26-5.33s-.32-.64-.32-1.59c0-1.49.87-2.61 1.94-2.61.92 0 1.36.69 1.36 1.52 0 .92-.59 2.31-.89 3.59-.25 1.07.53 1.95 1.58 1.95 1.9 0 3.17-2.43 3.17-5.31 0-2.19-1.47-3.83-4.13-3.83-3.01 0-4.89 2.25-4.89 4.77 0 .87.26 1.48.66 1.96.18.22.21.3.14.55-.05.18-.16.61-.21.78-.07.25-.28.34-.52.25-1.47-.6-2.15-2.22-2.15-4.04 0-3 2.5-6.61 7.48-6.61 4 0 6.63 2.9 6.63 6.02 0 4.11-2.28 7.19-5.63 7.19-1.13 0-2.19-.61-2.55-1.3l-.69 2.72c-.25.96-.92 2.16-1.37 2.89C10.72 21.94 11.35 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" /> },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(201,168,130,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7A7470', transition: 'border-color 300ms, color 300ms', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A882'; e.currentTarget.style.color = '#C9A882'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,130,0.25)'; e.currentTarget.style.color = '#7A7470'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
            </a>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 10, color: '#3E3A36' }}>© 2024 Tutto Legno. Tous droits réservés.</div>
        <div style={{ fontSize: 10, color: '#3E3A36' }}>Menuiserie haut de gamme · Abidjan</div>
        <div style={{ fontSize: 10, color: '#3E3A36' }}>
          Développé par{' '}
          <a
            href="https://webey-agency-elevate.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#A67C52', textDecoration: 'none', transition: 'color 300ms ease-out' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C9A882'}
            onMouseLeave={e => e.currentTarget.style.color = '#A67C52'}
          >
            Webey Agency
          </a>
        </div>
      </div>
    </footer>
  );
}
