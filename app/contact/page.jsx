import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Contact | Tutto Legno — Demander un devis à Abidjan',
  description:
    'Contactez Tutto Legno pour vos projets de menuiserie sur mesure à Abidjan. Devis gratuit sous 48h.',
};

export default function ContactPage() {
  return (
    <div style={{ background: '#1C1916', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: 72 }}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
