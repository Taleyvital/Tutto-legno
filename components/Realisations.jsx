'use client';

import { useState } from 'react';

const FILTERS = ['Tous', 'Portes', 'Mobilier', 'Cuisine', 'Dressing'];

const PROJECTS = [
  // Portes
  {
    title: "Porte d'entrée wengé",
    loc: 'Abidjan, 2024',
    cat: 'Portes',
    desc: 'Porte massif wengé avec vitrages latéraux',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.11.52.jpeg',
    pos: 'center center',
  },
  {
    title: 'Double porte soleil sculptée',
    loc: 'Abidjan, 2025',
    cat: 'Portes',
    desc: 'Double vantaux bois massif sculpté motif soleil',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.11.55%20%288%29.jpeg',
    pos: 'center top',
  },
  {
    title: 'Porte pivotante acajou',
    loc: 'Cocody, 2025',
    cat: 'Portes',
    desc: "Porte d'entrée pivotante acajou laqué & verre",
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.12.15.jpeg',
    pos: 'center center',
  },
  {
    title: 'Porte intérieure acajou',
    loc: 'Angré, 2025',
    cat: 'Portes',
    desc: 'Porte intérieure acajou rouge, poignée inox carrée',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.11.55%20%282%29.jpeg',
    pos: 'center center',
  },
  // Mobilier
  {
    title: 'Salle à manger laquée',
    loc: 'Abidjan, 2025',
    cat: 'Mobilier',
    desc: 'Table & 6 chaises laquées noir mat sur mesure',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.10.29.jpeg',
    pos: 'center center',
  },
  {
    title: 'Table familiale bois massif',
    loc: 'Abidjan, 2024',
    cat: 'Mobilier',
    desc: 'Table avec insert décoratif galets & chaises cuir blanc',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.10.29%20%282%29.jpeg',
    pos: 'center center',
  },
  {
    title: 'Salon complet sur mesure',
    loc: 'Riviera, 2025',
    cat: 'Mobilier',
    desc: 'Meuble TV, étagères murales flottantes & table basse',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.11.55.jpeg',
    pos: 'center center',
  },
  {
    title: 'Chaise design bois brut',
    loc: 'Atelier, 2025',
    cat: 'Mobilier',
    desc: 'Chaise ergonomique bois massif taillée sur mesure',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.11.55%20%283%29.jpeg',
    pos: 'center top',
  },
  {
    title: 'Table de terrasse lattes',
    loc: 'Atelier, 2025',
    cat: 'Mobilier',
    desc: 'Table extérieure lattes bois massif & pieds en A',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.11.55%20%2811%29.jpeg',
    pos: 'center top',
  },
  // Cuisine
  {
    title: 'Cuisine meubles hauts acajou',
    loc: 'Abidjan, 2024',
    cat: 'Cuisine',
    desc: 'Pose meubles hauts cuisine acajou massif teinte wengé',
    img: '/realisation/WhatsApp%20Image%202026-06-01%20at%2011.11.53.jpeg',
    pos: 'center center',
  },
  {
    title: 'Cuisine bicolore bois & blanc',
    loc: 'Abidjan, 2025',
    cat: 'Cuisine',
    desc: 'Cuisine complète bois naturel, meubles hauts laqués blancs',
    img: '/realisation/IMG_1772.JPG',
    pos: 'center center',
  },
  {
    title: 'Cuisine laquée blanche',
    loc: 'Abidjan, 2025',
    cat: 'Cuisine',
    desc: 'Cuisine en L laquée blanc mat, four encastré, hotte intégrée',
    img: '/realisation/IMG_1778.JPG',
    pos: 'center center',
  },
  // Portes — nouvelle vague
  {
    title: 'Porte pivotante laquée noire',
    loc: 'Cocody, 2025',
    cat: 'Portes',
    desc: 'Grande porte d\'entrée pivotante laquée noir mat, poignée inox',
    img: '/realisation/IMG_1784.JPG',
    pos: 'center center',
  },
  // Mobilier — nouvelle vague
  {
    title: 'Table basse bois & verre fumé',
    loc: 'Abidjan, 2025',
    cat: 'Mobilier',
    desc: 'Table basse bois massif avec plateau en verre fumé et tiroirs',
    img: '/realisation/IMG_1726.JPG',
    pos: 'center center',
  },
  {
    title: 'Salle à manger 8 places wengé',
    loc: 'Abidjan, 2025',
    cat: 'Mobilier',
    desc: 'Table carrée 8 places wengé laqué, chaises tissu gris acier',
    img: '/realisation/IMG_1731.JPG',
    pos: 'center top',
  },
  {
    title: 'Table live edge acajou',
    loc: 'Riviera, 2025',
    cat: 'Mobilier',
    desc: 'Table salle à manger plateau monoxyle bords naturels, pieds massifs',
    img: '/realisation/IMG_1736.JPG',
    pos: 'center center',
  },
  {
    title: 'Fauteuil design acajou & crème',
    loc: 'Abidjan, 2025',
    cat: 'Mobilier',
    desc: 'Fauteuil scandinave bois acajou, assise et dossier tissu crème',
    img: '/realisation/IMG_1757.JPG',
    pos: 'center center',
  },
  // Dressing
  {
    title: 'Dressing miroir portes coulissantes',
    loc: 'Angré, 2025',
    cat: 'Dressing',
    desc: 'Dressing encastré 3 portes coulissantes, vantail central miroir pleine hauteur',
    img: '/realisation/IMG_1832.JPG',
    pos: 'center center',
  },
  {
    title: 'Walk-in closet sur mesure',
    loc: 'Plateau, 2025',
    cat: 'Dressing',
    desc: 'Dressing ouvert, penderie centrale, tiroirs et étagères modulables',
    img: '/realisation/IMG_1838.JPG',
    pos: 'center center',
  },
];

function ProjectCard({ title, loc, cat, desc, col, img, pos }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ gridColumn: col || 'span 6', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      <div style={{
        backgroundImage: img ? `url('${img}')` : undefined,
        background: img ? undefined : 'repeating-linear-gradient(135deg, #2C2420 0px, #2C2420 20px, #1C1916 20px, #1C1916 40px)',
        backgroundSize: 'cover',
        backgroundPosition: pos || 'center',
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
    <section className="section-pad" style={{ background: '#F4F2EF' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A67C52', marginBottom: 16 }}>Nos Réalisations</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1C1916' }}>
            Chaque projet raconte<br />une histoire unique.
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
      <div className="real-grid">
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
