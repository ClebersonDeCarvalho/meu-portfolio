import { Squada_One, Condiment, Bebas_Neue, Inter } from 'next/font/google';
import './global.css';

const squadaOne = Squada_One({ 
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-squada',
});

const condiment = Condiment({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-condiment',
});

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Cleberson de Carvalho - Portfólio',
  description: 'Full Stack Developer',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${squadaOne.variable} ${condiment.variable} ${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
