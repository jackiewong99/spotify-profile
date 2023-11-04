'use client';
import { useSession } from 'next-auth/react';
// Components
import LoginPrompt from './components/LoginPrompt';
import Profile from './components/Profile';

const Home = () => {
  const { data, status } = useSession();

  return (
    <div className='w-screen'>
      {data?.user?.accessToken && status === 'authenticated' ? (
        <Profile data={data} />
      ) : (
        <LoginPrompt />
      )}
    </div>
  );
};

export default Home;
