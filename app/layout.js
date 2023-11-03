import './globals.css';
import { getServerSession } from 'next-auth';
// Components
import SessionProvider from './components/SessionProvider';
import Sidenav from './components/Sidenav';

export const metadata = {
  title: 'Spotify Profile',
  description:
    'A simple web app built with Next.js that allows users to view their Spotify profile.',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang='en'>
      <body className='min-h-screen'>
        <SessionProvider session={session} refetchInterval={1800}>
          <div className='flex justify-start'>
            <Sidenav />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
