'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ── Data ─────────────────────────────────────────── */

const PRODUCTS = [
  {
    icon: '▭',
    name: 'Portes sur mesure',
    desc: "Portes d'entrée et intérieures en bois massif, travaillées à l'unité avec une précision au millimètre.",
  },
  {
    icon: '▤',
    name: 'Cuisines européennes',
    desc: 'Plans de travail, façades et placards aux finitions irréprochables, dignes des plus grands ateliers milanais.',
  },
  {
    icon: '▦',
    name: 'Dressings',
    desc: 'Armoires et dressings intégrés, conçus sur mesure pour sublimer chaque espace de vie.',
  },
  {
    icon: '◫',
    name: 'Meubles TV',
    desc: 'Bibliothèques et meubles audiovisuels sur mesure, alliant sobriété et raffinement.',
  },
];

const VALEURS = [
  {
    title: 'Précision',
    text: 'Chaque coupe, chaque assemblage, chaque finition est exécuté avec une exactitude absolue. Nous mesurons deux fois, coupons une fois.',
  },
  {
    title: 'Durabilité',
    text: 'Nous travaillons uniquement des bois massifs certifiés, conçus pour traverser les décennies sans perdre ni leur forme, ni leur beauté.',
  },
  {
    title: 'Excellence',
    text: 'Nos standards ne sont pas locaux — ils sont internationaux. Chaque pièce sort de notre atelier prête à figurer dans les plus belles demeures du monde.',
  },
];

/* ── Sub-components ───────────────────────────────── */

function ProductCard({ icon, name, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#23201C' : '#1a1815',
        border: `1px solid ${hovered ? '#A67C52' : 'rgba(166,124,82,0.25)'}`,
        borderRadius: 2,
        padding: '36px 28px',
        transition: 'all 320ms ease-out',
        transform: hovered ? 'translateY(-6px)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: 26, color: '#C9A882', marginBottom: 20, lineHeight: 1 }}>{icon}</div>
      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', color: '#F5EFE6', marginBottom: 12 }}>{name}</div>
      <div style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.75, color: '#7A7470' }}>{desc}</div>
    </div>
  );
}

function CTAButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        background: hovered ? '#C9A882' : '#A67C52',
        color: '#0E0C0A',
        borderRadius: 2,
        fontFamily: 'inherit',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        padding: '18px 52px',
        textDecoration: 'none',
        transition: 'background 300ms ease-out',
      }}
    >
      Contactez-nous
    </a>
  );
}

/* ── Page ─────────────────────────────────────────── */

export default function AProposPage() {
  return (
    <div style={{ background: '#0E0C0A', minHeight: '100vh' }}>
      <Navbar />

      {/* ── 1. Hero ──────────────────────────────────── */}
      <section
        style={{
          background: '#0E0C0A',
          paddingTop: 72,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle wood-grain texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(118deg, rgba(201,168,130,0.025) 0px, rgba(201,168,130,0.025) 1px, transparent 1px, transparent 72px)',
            pointerEvents: 'none',
          }}
        />
        <div className="section-pad" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#A67C52',
                marginBottom: 24,
              }}
            >
              Qui sommes-nous
            </div>
            <h1
              style={{
                fontSize: 'clamp(40px, 7vw, 96px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: 1.02,
                color: '#F5EFE6',
                marginBottom: 32,
              }}
            >
              Notre<br />histoire
            </h1>
            <p
              style={{
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                fontWeight: 300,
                lineHeight: 1.75,
                color: '#7A7470',
                maxWidth: 520,
              }}
            >
              Une menuiserie née d&apos;une exigence&nbsp;: le bois massif,&nbsp;sans compromis.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Mission ───────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#0E0C0A', borderTop: '1px solid rgba(201,168,130,0.08)' }}
      >
        <div className="about-grid">
          {/* Text */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#A67C52',
                marginBottom: 24,
              }}
            >
              Notre mission
            </div>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.95, color: '#B8B2AA', marginBottom: 22 }}>
              TUTTO LEGNO est né de la conviction que l&apos;artisanat local peut rivaliser avec les plus grands
              ateliers du monde. Fondé à Abidjan en 2025 par Sylla Mohamed, notre atelier s&apos;est imposé comme
              la référence ivoirienne du bois massif sur mesure.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.95, color: '#B8B2AA', marginBottom: 22 }}>
              Nous travaillons exclusivement des essences nobles — wengé, iroko, acajou, chêne européen — et
              livrons des pièces qui tiennent la comparaison avec Natuzzi, Roche Bobois ou BoConcept. Chaque
              création est pensée pour durer une vie entière.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.95, color: '#B8B2AA' }}>
              Notre clientèle — promoteurs immobiliers, architectes et propriétaires de villas de standing — nous
              fait confiance pour transformer leurs espaces en œuvres de vie. De la première esquisse à la pose
              finale, nous ne faisons aucun compromis.
            </p>
          </div>

          {/* Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div
              style={{
                fontSize: 'clamp(80px, 10vw, 128px)',
                fontWeight: 700,
                color: '#A67C52',
                lineHeight: 0.8,
                opacity: 0.2,
                marginBottom: 16,
                fontStyle: 'italic',
              }}
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                fontSize: 'clamp(18px, 2vw, 26px)',
                fontWeight: 600,
                letterSpacing: '0.01em',
                lineHeight: 1.45,
                color: '#F5EFE6',
                fontStyle: 'italic',
                marginBottom: 28,
              }}
            >
              Nous faisons de vos rêves<br />une réalité.
            </blockquote>
            <div
              style={{
                width: 48,
                height: 1,
                background: '#A67C52',
                marginBottom: 16,
              }}
            />
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#A67C52',
              }}
            >
              Sylla Mohamed — Fondateur
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Ce que nous faisons ───────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#0A0908', borderTop: '1px solid rgba(201,168,130,0.08)' }}
      >
        <div style={{ marginBottom: 64 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#A67C52',
              marginBottom: 16,
            }}
          >
            Ce que nous faisons
          </div>
          <h2
            style={{
              fontSize: 'clamp(24px, 3vw, 44px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#F5EFE6',
              maxWidth: 480,
            }}
          >
            Quatre savoir-faire,<br />une exigence unique.
          </h2>
        </div>
        <div className="services-grid">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* ── 4. Notre atelier ─────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#0E0C0A', borderTop: '1px solid rgba(201,168,130,0.08)' }}
      >
        <div className="about-grid">
          {/* Image placeholder */}
          <div>
            <div
              style={{
                aspectRatio: '4/3',
                width: '100%',
                background:
                  'repeating-linear-gradient(135deg, #191613 0px, #191613 20px, #1C1916 20px, #1C1916 40px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(201,168,130,0.12)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 11,
                  color: '#A67C52',
                  background: 'rgba(14,12,10,0.82)',
                  padding: '10px 20px',
                  textAlign: 'center',
                  lineHeight: 1.7,
                  whiteSpace: 'pre',
                  letterSpacing: '0.06em',
                }}
              >
                {'Photo atelier\n1200 × 900 px'}
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#A67C52',
                marginBottom: 24,
              }}
            >
              Notre atelier
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#F5EFE6',
                marginBottom: 28,
              }}
            >
              Au cœur de<br />Cocody Abatta.
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.95, color: '#7A7470', marginBottom: 20 }}>
              Notre atelier est implanté à Cocody Abatta, à Abidjan. Sur 800 m² de surface de travail, nos
              artisans opèrent sur des machines professionnelles de précision — scie à format, toupie,
              mortaiseuse, ponceuse à bande — dans un environnement pensé pour l&apos;excellence.
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.95, color: '#7A7470' }}>
              Chaque pièce passe par les mains de menuisiers expérimentés, formés aux techniques européennes et
              africaines. Le savoir-faire artisanal y côtoie l&apos;outillage industriel pour produire des créations
              d&apos;une précision irréprochable, au millimètre près.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Nos valeurs ───────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: '#0A0908', borderTop: '1px solid rgba(201,168,130,0.08)' }}
      >
        <div style={{ marginBottom: 64 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#A67C52',
              marginBottom: 16,
            }}
          >
            Nos valeurs
          </div>
          <h2
            style={{
              fontSize: 'clamp(24px, 3vw, 44px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#F5EFE6',
            }}
          >
            Ce qui nous guide.
          </h2>
        </div>
        <div className="values-grid">
          {VALEURS.map(({ title, text }) => (
            <div
              key={title}
              style={{
                borderTop: '1px solid rgba(166,124,82,0.3)',
                paddingTop: 32,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#A67C52',
                  marginBottom: 16,
                }}
              >
                {title}
              </div>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.85, color: '#7A7470' }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────── */}
      <section
        className="section-pad"
        style={{
          background: '#0E0C0A',
          borderTop: '1px solid rgba(201,168,130,0.08)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#A67C52',
              marginBottom: 24,
            }}
          >
            Parlons de votre projet
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#F5EFE6',
              marginBottom: 20,
            }}
          >
            Vous avez un projet&nbsp;?<br />Parlons-en.
          </h2>
          <p
            style={{
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#7A7470',
              marginBottom: 48,
            }}
          >
            Décrivez-nous votre vision. Nos équipes reviennent vers vous sous 48h.
          </p>
          <CTAButton />
        </div>
      </section>

      <Footer />
    </div>
  );
}
