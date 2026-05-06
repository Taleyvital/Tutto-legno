'use client';

import TLMonogram from './TLMonogram';

const COLS = [
  { title: 'Services',   links: ['Portes & fenêtres', 'Mobilier sur mesure', 'Escaliers', 'Parquet & revêtements'] },
  { title: 'Entreprise', links: ['Nos réalisations', 'À propos', 'Atelier', 'Contact'] },
  { title: 'Contact',    links: ["Abidjan, CI", '+225 00 00 00 00', 'contact@tuttolegno.ci', 'Lun–Ven 8h–17h'] },
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
