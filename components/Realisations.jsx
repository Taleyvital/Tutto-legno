'use client';

import { useState } from 'react';

const FILTERS = ['Tous', 'Portes', 'Mobilier', 'Escaliers', 'Parquet'];

const PROJECTS = [
  { title: 'Villa Les Palmiers',  loc: 'Cocody, 2024',   cat: 'Mobilier',  desc: 'Aménagement complet 340 m²' },
  { title: 'Résidence Bel Air',   loc: 'Angré, 2024',    cat: 'Portes',    desc: '12 portes chêne massif' },
  { title: 'Penthouse Plateau',   loc: 'Plateau, 2023',  cat: 'Escaliers', desc: 'Escalier hélicoïdal acajou' },
  { title: 'Villa Tropicale',     loc: 'Riviera 3, 2023',cat: 'Parquet',   desc: '280 m² parquet iroko' },
  { title: "Manoir d'Attoban",    loc: 'Attoban, 2023',  cat: 'Mobilier',  desc: 'Bibliothèque & dressing wengé' },
];

function ProjectCard({ title, loc, cat, desc, col }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ gridColumn: col || 'span 6', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      <div style={{
        background: 'repeating-linear-gradient(135deg, #2C2420 0px, #2C2420 20px, #1C1916 20px, #1C1916 40px)',
        aspectRatio: '4/3', width: '100%',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 600ms ease-out',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(28,25,22,0.90) 0%, transparent 60%)',
        opacity: hovered ? 1 : 0.7,
        transition: 'opacity 400ms ease-out',
      }} />
      <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, zIndex: 2 }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A882', marginBottom: 6 }}>{cat}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#F5EFE6', lineHeight: 1.2, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 10, color: '#B8B2AA', fontWeight: 300, letterSpacing: '0.04em' }}>{desc} · {loc}</div>
      </div>
    </div>
  );
}

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const shown = activeFilter === 'Tous' ? PROJECTS : PROJECTS.filter(p => p.cat === activeFilter);

  return (
    <section style={{ padding: '120px 80px', background: '#F4F2EF' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A67C52', marginBottom: 16 }}>Nos Réalisations</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1C1916' }}>
            Chaque projet raconte<br />une histoire unique.
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 2 }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              fontFamily: 'inherit', fontSize: 9, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', padding: '9px 16px', border: 'none', cursor: 'pointer',
              background: activeFilter === f ? '#1C1916' : '#E2DED8',
              color: activeFilter === f ? '#F5EFE6' : '#7A7470',
              transition: 'all 300ms ease-out',
            }}>{f}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 4 }}>
        {shown.slice(0, 3).map((p, i) => (
          <ProjectCard key={p.title} {...p} col={i === 0 ? 'span 7' : 'span 5'} />
        ))}
        {shown.slice(3).map((p, i) => (
          <ProjectCard key={p.title} {...p} col={i === 0 ? 'span 5' : 'span 7'} />
        ))}
      </div>
    </section>
  );
}
