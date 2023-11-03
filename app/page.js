'use client';
import { useSession } from 'next-auth/react';
// Components
import LoginPrompt from './components/LoginPrompt';
import Profile from './components/Profile';

const Home = () => {
  const { data } = useSession();
  return (
    <div className='w-screen'>
      {data?.user?.accessToken ? <Profile data={data} /> : <LoginPrompt />}
    </div>
  );
};

export default Home;
