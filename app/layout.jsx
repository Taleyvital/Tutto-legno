import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'TUTTO LEGNO — Menuiserie Bois Massif · Abidjan',
  description: 'Artisans du bois massif depuis vingt ans à Abidjan. Chaque pièce est façonnée sur mesure, pour durer une vie entière.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
