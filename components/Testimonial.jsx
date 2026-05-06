'use client';

import TLMonogram from './TLMonogram';

export default function Testimonial() {
  return (
    <section style={{ background: '#1C1916', padding: '120px 80px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <TLMonogram size={150} />
        </div>
        <blockquote style={{
          fontSize: 'clamp(18px, 2.4vw, 30px)', fontWeight: 700, lineHeight: 1.3,
          letterSpacing: '-0.01em', color: '#F5EFE6', marginBottom: 40,
        }}>
          Tutto Legno a transformé notre villa en un véritable chef-d&apos;œuvre. Le soin apporté à chaque détail, la qualité du bois massif — c&apos;est exactement le niveau d&apos;exigence que nous attendions.
        </blockquote>
        <div style={{ width: 48, height: 1, background: '#A67C52', margin: '0 auto 24px' }} />
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A882' }}>Kouamé Assouman</div>
        <div style={{ fontSize: 10, fontWeight: 300, letterSpacing: '0.08em', color: '#7A7470', marginTop: 6 }}>Promoteur immobilier — Cocody, Abidjan</div>
      </div>
    </section>
  );
}
