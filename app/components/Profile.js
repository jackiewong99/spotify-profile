'use client';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { catchErrors } from '@/components/utils/profile';
import { fetchProfile } from '@/components/utils/profile';

const Profile = ({ data }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await fetchProfile(data);
      setUser(userInfo);
      console.log(userInfo);
    };
    catchErrors(fetchData());
  }, []);
  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-center text-white-100 bg-gray-800'>
        {user ? (
          <div className='flex flex-col items-center'>
            <h1 className='my-auto text-5xl font-bold'>{`${user.display_name}'s Spotify Profile`}</h1>
            <h1 className='mt-5 font-normal'>
              Followers: {user.followers.total}
            </h1>
            <h1 className='mt-5 font-normal'>Region: {user.country}</h1>
            <button
              onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
              className='px-8 py-3 mt-8 rounded-full text-base font-normal tracking-wider bg-green-600 transition-all hover:bg-green-700 hover:text-white-200 hover:duration-300'
            >
              Sign Out
            </button>
          </div>
        ) : (
          <h1>
            Uh oh, something went wrong. You do not have authorized access to
            this page.
          </h1>
        )}
      </div>
    </>
  );
};

export default Profile;
