import './globals.css';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const circular = localFont({
  src: [
    {
      path: './fonts/CircularStd-Black.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Spotify Profile',
  description:
    'A simple web app built with Next.js that allows users to view their Spotify profile.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${circular.className}`}>{children}</body>
    </html>
  );
}
