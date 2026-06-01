'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SERVICES = [
  {
    num: '01',
    cat: 'Portes & Fenêtres',
    title: 'Menuiserie extérieure',
    desc: "Portes d'entrée monumentales, portes intérieures, fenêtres à galandage et baies vitrées habillées de bois massif. Chaque pièce est conçue pour impressionner dès le seuil.",
    detail: ['Portes pivotantes sur mesure', 'Portes blindées habillées bois', 'Portes intérieures massif', 'Fenêtres & baies coulissantes', 'Bois disponibles : wengé, acajou, iroko, chêne'],
    icon: '▭',
    img: '/realisation/IMG_1784.JPG',
  },
  {
    num: '02',
    cat: 'Mobilier',
    title: 'Aménagement intérieur',
    desc: 'Tables, chaises, meubles TV, bibliothèques, canapés, lits et rangements — entièrement sur mesure. Du mobilier conçu pour durer et raconter votre histoire.',
    detail: ['Salles à manger complètes', 'Tables basses & coffee tables', 'Meubles TV & bibliothèques', 'Têtes de lit & cadres de lit', 'Canapés structure bois'],
    icon: '▤',
    img: '/realisation/IMG_1731.JPG',
  },
  {
    num: '03',
    cat: 'Cuisine',
    title: 'Cuisines sur mesure',
    desc: "Cuisines européennes complètes — meubles bas, meubles hauts, îlot central, plans de travail. Des espaces de vie fonctionnels et élégants, adaptés à chaque configuration.",
    detail: ['Meubles bas & hauts sur mesure', 'Îlot central', 'Plans de travail', 'Colonnes fours & réfrigérateur', 'Finitions laquées ou bois naturel'],
    icon: '◧',
    img: '/realisation/IMG_1772.JPG',
  },
  {
    num: '04',
    cat: 'Dressing',
    title: 'Dressings & placards',
    desc: 'Dressings encastrés, walk-in closets, placards sur mesure. Chaque centimètre est optimisé pour un rangement intelligent et une esthétique irréprochable.',
    detail: ['Dressings portes coulissantes', 'Walk-in closets', 'Placards intégrés', 'Intérieurs modulables', 'Miroirs pleine hauteur'],
    icon: '▦',
    img: '/realisation/IMG_1832.JPG',
  },
  {
    num: '05',
    cat: 'Escaliers',
    title: 'Escaliers & garde-corps',
    desc: 'Structures hélicoïdales, droites ou en L, avec garde-corps bois ou métal. Un escalier Tutto Legno est une sculpture architecturale autant qu\'un élément fonctionnel.',
    detail: ['Escaliers droits & en L', 'Escaliers hélicoïdaux', 'Garde-corps bois massif', 'Limons & marches sur mesure', 'Bois : acajou, wengé, iroko, chêne'],
    icon: '⌇',
    img: null,
  },
  {
    num: '06',
    cat: 'Parquet & Plafonds',
    title: 'Revêtements bois',
    desc: 'Parquet massif posé flottant ou cloué, faux plafonds en lames de bois, lambris muraux. Le bois partout, du sol au plafond.',
    detail: ['Parquet massif toutes essences', 'Ponçage & vitrification sur place', 'Faux plafonds bois lattes', 'Lambris muraux', 'Bardages intérieurs'],
    icon: '▩',
    img: '/realisation/IMG_1862.JPG',
  },
];

function ServiceBlock({ num, cat, title, desc, detail, icon, img, reverse }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="service-block" style={{ borderTop: '1px solid rgba(28,25,22,0.08)' }}>
      {/* Texte */}
      <div className="service-block-text" style={{ order: reverse ? 2 : 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#C9A882', letterSpacing: '0.1em' }}>{num}</span>
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A67C52' }}>{cat}</span>
        </div>
        <h2 style={{
          fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 700,
          letterSpacing: '-0.02em', lineHeight: 1.15, color: '#1C1916', marginBottom: 20,
        }}>
          {title}
        </h2>
        <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.9, color: '#7A7470', marginBottom: 32, maxWidth: 420 }}>
          {desc}
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
          {detail.map(item => (
            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 20, height: 1, background: '#A67C52', flexShrink: 0, display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 400, color: '#3E3A36', letterSpacing: '0.02em' }}>{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="/contact"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            alignSelf: 'flex-start', display: 'inline-block',
            background: hovered ? '#1C1916' : 'transparent',
            color: hovered ? '#F5EFE6' : '#1C1916',
            border: '1.5px solid #1C1916', borderRadius: 2,
            fontFamily: 'inherit', fontSize: 9, fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '14px 36px', textDecoration: 'none',
            transition: 'all 300ms ease-out',
          }}
        >
          Demander un devis
        </a>
      </div>

      {/* Image */}
      <div className="service-block-img" style={{ order: reverse ? 1 : 2 }}>
        {img ? (
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 700ms ease-out',
          }} />
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(135deg, #2C2420 0px, #2C2420 24px, #1C1916 24px, #1C1916 48px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 48, color: '#C9A882', opacity: 0.4 }}>{icon}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ background: '#F5EFE6', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ background: '#1C1916', paddingTop: 72 }}>
        <div className="section-pad">
          <div style={{ maxWidth: 760 }}>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.28em',
              textTransform: 'uppercase', color: '#C9A882', marginBottom: 24,
            }}>
              Nos expertises
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 600,
              letterSpacing: '-0.03em', lineHeight: 1.02, color: '#F5EFE6', marginBottom: 32,
            }}>
              Six métiers,<br />une exigence.
            </h1>
            <p style={{
              fontSize: 'clamp(14px, 1.4vw, 18px)', fontWeight: 300,
              lineHeight: 1.75, color: '#7A7470', maxWidth: 520,
            }}>
              Du seuil d&apos;entrée au cœur de la chambre, Tutto Legno maîtrise chaque
              espace de votre intérieur. Bois massif, finitions irréprochables,
              délais tenus.
            </p>
          </div>
        </div>
      </section>

      {/* ── Blocs alternés ── */}
      <div>
        {SERVICES.map((s, i) => (
          <ServiceBlock key={s.num} {...s} reverse={i % 2 !== 0} />
        ))}
      </div>

      {/* ── Processus ── */}
      <section className="section-pad" style={{
        background: '#F4F2EF',
        borderTop: '1px solid rgba(28,25,22,0.06)',
      }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.24em',
            textTransform: 'uppercase', color: '#A67C52', marginBottom: 16,
          }}>
            Notre processus
          </div>
          <h2 style={{
            fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 600,
            letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1C1916', maxWidth: 480,
          }}>
            De la première esquisse<br />à la livraison.
          </h2>
        </div>
        <div className="process-grid">
          {[
            { step: '01', title: 'Consultation', desc: 'Nous écoutons votre projet, visitons le site et établissons un cahier des charges précis.' },
            { step: '02', title: 'Conception', desc: 'Plans techniques, choix des essences, validation des finitions. Rien n\'est laissé au hasard.' },
            { step: '03', title: 'Fabrication', desc: 'Dans notre atelier de Cocody Abatta, nos artisans façonnent chaque pièce à la main.' },
            { step: '04', title: 'Pose & livraison', desc: 'Installation par nos équipes, contrôle qualité final, remise des clés dans les délais convenus.' },
          ].map(({ step, title, desc }) => (
            <div key={step} style={{
              background: '#F5EFE6', padding: '40px 32px',
              borderTop: '3px solid #C9A882',
            }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#E8D8C0', letterSpacing: '-0.03em', marginBottom: 20 }}>{step}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1C1916', marginBottom: 12, letterSpacing: '0.01em' }}>{title}</div>
              <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: '#7A7470' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{
        background: '#1C1916',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#C9A882', marginBottom: 24,
          }}>
            Commençons
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 600,
            letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5EFE6', marginBottom: 20,
          }}>
            Quel est votre<br />projet ?
          </h2>
          <p style={{
            fontSize: 14, fontWeight: 300, lineHeight: 1.75,
            color: '#7A7470', marginBottom: 48,
          }}>
            Décrivez-nous votre vision. Nous revenons vers vous sous 48h avec une proposition détaillée.
          </p>
          <a href="/contact" style={{
            display: 'inline-block', background: '#A67C52', color: '#F5EFE6',
            borderRadius: 2, fontFamily: 'inherit', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '18px 52px', textDecoration: 'none',
          }}>
            Demander un devis
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
