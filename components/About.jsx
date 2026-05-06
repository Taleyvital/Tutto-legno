'use client';

function WoodPhoto({ label, aspect }) {
  return (
    <div style={{
      aspectRatio: aspect, width: '100%',
      background: 'repeating-linear-gradient(135deg, #E8D8C0 0px, #E8D8C0 18px, #F5EFE6 18px, #F5EFE6 36px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: "'Courier New', monospace", fontSize: 11, color: '#A67C52',
        background: 'rgba(245,239,230,0.85)', padding: '8px 16px', textAlign: 'center', lineHeight: 1.6,
        whiteSpace: 'pre',
      }}>{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section style={{ padding: '120px 80px', background: '#F5EFE6' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A67C52', marginBottom: 20 }}>Notre Histoire</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1C1916', marginBottom: 28 }}>
            L&apos;artisanat ivoirien<br />à hauteur du luxe mondial.
          </h2>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: '#7A7470', marginBottom: 20 }}>
            Fondée à Abidjan, Tutto Legno est née de la conviction que le bois massif mérite d&apos;être travaillé avec la même rigueur qu&apos;un atelier florentin ou milanais.
          </p>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: '#7A7470', marginBottom: 40 }}>
            Chaque projet débute par une écoute attentive. Nos menuisiers, formés aux techniques européennes et africaines, transforment des essences nobles — wengé, acajou, iroko, chêne — en pièces uniques et durables.
          </p>
          <button
            style={{
              background: 'transparent', color: '#1C1916', border: '1.5px solid #1C1916',
              borderRadius: 2, fontFamily: 'inherit', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase', padding: '14px 32px', cursor: 'pointer',
              transition: 'all 400ms ease-out',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1C1916'; e.currentTarget.style.color = '#F5EFE6'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1C1916'; }}
          >
            Découvrir notre atelier
          </button>
        </div>
        <div>
          <WoodPhoto label={"photo atelier\n1200 × 900 px"} aspect="4/3" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginTop: 4 }}>
            <WoodPhoto label={"détail\nbois massif"} aspect="1/1" />
            <WoodPhoto label={"artisan\nat work"} aspect="1/1" />
          </div>
        </div>
      </div>
    </section>
  );
}
