import Navbar from '../../components/Navbar';
import Realisations from '../../components/Realisations';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Réalisations | Tutto Legno — Menuiserie Haut de Gamme Abidjan',
  description:
    'Découvrez toutes les réalisations de Tutto Legno : portes sur mesure, mobilier, cuisines, dressings en bois massif à Abidjan.',
};

export default function RealisationsPage() {
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
              Portfolio
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 7vw, 96px)', fontWeight: 600,
              letterSpacing: '-0.03em', lineHeight: 1.02, color: '#F5EFE6', marginBottom: 32,
            }}>
              Nos<br />Réalisations
            </h1>
            <p style={{
              fontSize: 'clamp(14px, 1.4vw, 18px)', fontWeight: 300,
              lineHeight: 1.75, color: '#7A7470', maxWidth: 520,
            }}>
              Chaque projet est une histoire unique. Découvrez notre portfolio de créations
              sur mesure — portes, mobilier, cuisines et dressings réalisés pour des
              clients exigeants à travers Abidjan.
            </p>
          </div>
        </div>
      </section>

      {/* ── Grille complète ── */}
      <Realisations />

      {/* ── CTA ── */}
      <section className="section-pad" style={{
        background: '#1C1916',
        borderTop: '1px solid rgba(201,168,130,0.12)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#C9A882', marginBottom: 24,
          }}>
            Votre projet
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 600,
            letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F5EFE6', marginBottom: 20,
          }}>
            Ce sera notre<br />prochaine réalisation.
          </h2>
          <p style={{
            fontSize: 14, fontWeight: 300, lineHeight: 1.75,
            color: '#7A7470', marginBottom: 48,
          }}>
            Décrivez-nous votre vision. Nos équipes reviennent vers vous sous 48h.
          </p>
          <a href="/contact" style={{
            display: 'inline-block', background: '#A67C52', color: '#F5EFE6',
            borderRadius: 2, fontFamily: 'inherit', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '18px 52px', textDecoration: 'none',
            transition: 'background 300ms ease-out',
          }}>
            Demander un devis
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
