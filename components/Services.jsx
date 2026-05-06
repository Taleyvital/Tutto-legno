'use client';

import { useState } from 'react';

const SERVICES = [
  { cat: 'Portes & Fenêtres', title: 'Menuiserie extérieure', desc: "Portes d'entrée monumentales, fenêtres à galandage, baies vitrées habillées de bois massif.", icon: '▭' },
  { cat: 'Mobilier', title: 'Aménagement intérieur', desc: 'Bibliothèques, dressings, cuisines, salles de bains — entièrement sur mesure.', icon: '▤' },
  { cat: 'Escaliers', title: 'Escaliers & garde-corps', desc: 'Structures hélicoïdales, droites ou en L. Acajou, wengé, iroko, chêne européen.', icon: '⌇' },
  { cat: 'Parquet', title: 'Revêtements de sol', desc: 'Parquet massif posé flottant ou cloué, ponçage, huilage, vitrification sur place.', icon: '▦' },
];

function ServiceCard({ cat, title, desc, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#1C1916' : '#F4F2EF',
        padding: '40px 32px',
        transition: 'background 400ms ease-out',
        cursor: 'pointer',
      }}
    >
      <div style={{ fontSize: 24, color: '#C9A882', marginBottom: 20, lineHeight: 1 }}>{icon}</div>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: hovered ? '#7A7470' : '#A67C52', marginBottom: 10 }}>{cat}</div>
      <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.25, color: hovered ? '#F5EFE6' : '#1C1916', marginBottom: 14, transition: 'color 400ms ease-out' }}>{title}</div>
      <div style={{ fontSize: 12, fontWeight: 400, lineHeight: 1.7, color: hovered ? '#B8B2AA' : '#7A7470', transition: 'color 400ms ease-out' }}>{desc}</div>
      <div style={{ marginTop: 24, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: hovered ? '#C9A882' : '#A67C52', transition: 'color 400ms ease-out' }}>
        En savoir plus →
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section-pad" style={{ background: '#F5EFE6' }}>
      <div style={{ marginBottom: 64 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A67C52', marginBottom: 16 }}>Nos Expertises</div>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1C1916', maxWidth: 600 }}>
          Un savoir-faire artisanal<br />au service du haut de gamme.
        </h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
