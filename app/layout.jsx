import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Tutto Legno | Menuiserie Bois Massif Haut de Gamme — Abidjan',
  description:
    'Tutto Legno, menuiserie bois massif haut de gamme à Cocody Abatta, Abidjan. Portes sur mesure, cuisines européennes, dressings et meubles TV pour projets résidentiels et immobiliers d'exception.',
  keywords: [
    'menuiserie Abidjan',
    'bois massif Côte d\'Ivoire',
    'porte sur mesure Abidjan',
    'cuisine européenne Abidjan',
    'dressing sur mesure',
    'menuiserie haut de gamme',
    'Tutto Legno',
    'menuiserie Cocody',
  ],
  authors: [{ name: 'Tutto Legno' }],
  creator: 'Tutto Legno',
  metadataBase: new URL('https://tutto-legno.ci'),
  openGraph: {
    title: 'Tutto Legno | Menuiserie Haut de Gamme — Abidjan',
    description:
      'Tutto Legno, menuiserie bois massif haut de gamme à Cocody Abatta, Abidjan. Portes sur mesure, cuisines européennes, dressings et meubles TV pour projets résidentiels et immobiliers d'exception.',
    url: 'https://tutto-legno.ci',
    siteName: 'Tutto Legno',
    locale: 'fr_CI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tutto Legno | Menuiserie Haut de Gamme — Abidjan',
    description:
      'Tutto Legno, menuiserie bois massif haut de gamme à Cocody Abatta, Abidjan. Portes sur mesure, cuisines européennes, dressings et meubles TV pour projets résidentiels et immobiliers d'exception.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Tutto Legno',
  description: 'Menuiserie bois massif haut de gamme',
  url: 'https://tutto-legno.ci',
  telephone: '+22507050899440',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cocody Abatta',
    addressLocality: 'Abidjan',
    addressCountry: 'CI',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 5.3364,
    longitude: -3.9897,
  },
  openingHours: 'Mo-Sa 08:00-18:00',
  priceRange: '$$$$',
  image: 'https://tutto-legno.ci/og-image.jpg',
  sameAs: [
    'https://www.instagram.com/tutto_legn0/',
    'https://www.linkedin.com/company/tutto-legno/',
    'https://web.facebook.com/profile.php?id=61589384670732',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
