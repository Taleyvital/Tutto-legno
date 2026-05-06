'use client';

import { useState, useEffect } from 'react';
import TLMonogram from './TLMonogram';

const LINKS = ['Accueil', 'Réalisations', 'Services', 'À propos', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const bg = scrolled ? 'rgba(28,25,22,0.96)' : 'transparent';
  const border = scrolled ? '1px solid rgba(201,168,130,0.15)' : '1px solid transparent';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', background: bg, borderBottom: border,
      transition: 'background 500ms ease-out, border-color 500ms ease-out',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
        <TLMonogram size={90} />
        <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5EFE6', whiteSpace: 'nowrap' }}>
          TUTTO LEGNO
        </span>
      </div>

      <ul style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none' }}>
        {LINKS.map(link => (
          <li key={link}>
            <a href="#" style={{
              fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#B8B2AA', textDecoration: 'none', transition: 'color 300ms ease-out',
            }}
            onMouseEnter={e => e.target.style.color = '#C9A882'}
            onMouseLeave={e => e.target.style.color = '#B8B2AA'}
            >{link}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" style={{
        background: '#A67C52', color: '#F5EFE6', border: 'none', borderRadius: 2,
        fontFamily: 'inherit', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
        textTransform: 'uppercase', padding: '12px 24px', cursor: 'pointer',
        transition: 'background 400ms ease-out', textDecoration: 'none', display: 'inline-block',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#7A5230'}
      onMouseLeave={e => e.currentTarget.style.background = '#A67C52'}
      >
        Demander un devis
      </a>
    </nav>
  );
}
