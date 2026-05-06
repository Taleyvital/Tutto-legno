'use client';

const STATS = [
  { n: '100%',    label: 'Bois massif certifié' },
  { n: 'Sur mesure', label: 'Chaque projet, unique' },
  { n: 'Abidjan', label: 'Atelier à Cocody Abatta' },
  { n: '48h',     label: 'Délai de réponse' },
];

export default function StatsBand() {
  return (
    <section style={{ background: '#1C1916', padding: '48px 80px', borderTop: '1px solid rgba(201,168,130,0.12)' }}>
      <div className="stats-grid">
        {STATS.map(s => (
          <div key={s.n} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#C9A882', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7A7470', marginTop: 10 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
