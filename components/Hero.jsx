'use client';

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(28,25,22,0.96) 0%, rgba(28,25,22,0.55) 50%, rgba(28,25,22,0.4) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, padding: '0 80px 96px', maxWidth: 900 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#C9A882', marginBottom: 20 }}>
          MENUISERIE BOIS MASSIF · ABIDJAN
        </div>
        <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 88px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#F5EFE6', marginBottom: 24 }}>
          Nous faisons de vos<br />rêves une réalité.
        </h1>
        <p style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.7, color: '#B8B2AA', marginBottom: 40, maxWidth: 560 }}>
          Artisans du bois massif depuis vingt ans à Abidjan. Chaque pièce est façonnée sur mesure, pour durer une vie entière.
        </p>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            background: '#A67C52', color: '#F5EFE6', border: 'none', borderRadius: 2,
            fontFamily: 'inherit', fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', padding: '16px 36px', cursor: 'pointer',
            transition: 'background 400ms ease-out', textDecoration: 'none', display: 'inline-block',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#7A5230'}
          onMouseLeave={e => e.currentTarget.style.background = '#A67C52'}
          >
            Demander un devis
          </a>
          <a href="#realisations" style={{
            background: 'transparent', color: '#F5EFE6', border: '1.5px solid rgba(245,239,230,0.3)',
            borderRadius: 2, fontFamily: 'inherit', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', padding: '15px 36px', cursor: 'pointer',
            transition: 'all 400ms ease-out', textDecoration: 'none', display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,239,230,0.08)'; e.currentTarget.style.borderColor = 'rgba(245,239,230,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(245,239,230,0.3)'; }}
          >
            Découvrir nos réalisations
          </a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 36, right: 48, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.4)', writingMode: 'vertical-rl' }}>DÉFILER</div>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(166,124,82,0.6), transparent)' }} />
      </div>
    </section>
  );
}
