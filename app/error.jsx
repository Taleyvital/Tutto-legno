'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#F5EFE6', fontFamily: 'inherit', gap: 16,
    }}>
      <p style={{ fontSize: 13, color: '#7A7470' }}>Une erreur est survenue.</p>
      <button onClick={reset} style={{
        background: '#A67C52', color: '#F5EFE6', border: 'none', borderRadius: 2,
        fontFamily: 'inherit', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '12px 24px', cursor: 'pointer',
      }}>
        Réessayer
      </button>
    </div>
  );
}
