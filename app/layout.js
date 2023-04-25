import './globals.css';

export const metadata = {
  title: 'Spotify Profile',
  description:
    'A simple web app built with Next.js that allows users to view their Spotify profile.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
