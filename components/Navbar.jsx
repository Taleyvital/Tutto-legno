'use client';

import { useState, useEffect } from 'react';
import TLMonogram from './TLMonogram';

const LINKS = ['Accueil', 'Réalisations', 'Services', 'À propos', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const bg = (scrolled || menuOpen) ? 'rgba(28,25,22,0.96)' : 'transparent';
  const border = (scrolled || menuOpen) ? '1px solid rgba(201,168,130,0.15)' : '1px solid transparent';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', background: bg, borderBottom: border,
        transition: 'background 500ms ease-out, border-color 500ms ease-out',
        backdropFilter: (scrolled || menuOpen) ? 'blur(16px)' : 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <TLMonogram size={90} />
          <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5EFE6', whiteSpace: 'nowrap' }}>
            TUTTO LEGNO
          </span>
        </div>

        <ul className="nav-links" style={{ alignItems: 'center', gap: 36, listStyle: 'none' }}>
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

        <a href="#contact" className="nav-cta" style={{
          background: '#A67C52', color: '#F5EFE6', border: 'none', borderRadius: 2,
          fontFamily: 'inherit', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', padding: '12px 24px', cursor: 'pointer',
          transition: 'background 400ms ease-out', textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#7A5230'}
        onMouseLeave={e => e.currentTarget.style.background = '#A67C52'}
        >
          Demander un devis
        </a>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 8,
          display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ display: 'block', width: 24, height: 2, background: '#F5EFE6', transition: 'all 300ms', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#F5EFE6', transition: 'all 300ms', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#F5EFE6', transition: 'all 300ms', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map(link => (
          <a key={link} href="#" onClick={() => setMenuOpen(false)}>{link}</a>
        ))}
        <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          Demander un devis
        </a>
      </div>
    </>
  );
}
