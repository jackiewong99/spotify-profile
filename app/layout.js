import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
// Components
import SessionProvider from './components/SessionProvider';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';

export const metadata = {
  title: 'Spotify Profile',
  description:
    'A simple web app built with Next.js that allows users to view their Spotify profile.',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className='min-h-screen'>
        <SessionProvider session={session} refetchInterval={1800}>
          {session && session.user && <Navbar />}
          <div className='flex justify-start'>
            {session && session.user && <Sidenav />}
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
