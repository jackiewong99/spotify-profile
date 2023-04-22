import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Spotify Profile',
  description:
    'A simple web app built with Next.js that allows users to view their Spotify profile.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
