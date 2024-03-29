'use client';
import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { fetchUserOnly, catchErrors } from '@/components/utils/profile';
// Components
import Link from 'next/link';
import Image from 'next/image';
import { IconExternal } from './icons';

const Navbar = () => {
  const [user, setUser] = useState();
  const [toggleDropdown, setToggleDropdown] = useState();
  const { data } = useSession();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUserOnly(data);
      setUser(userData.user);
    };
    catchErrors(fetchUserData());
  }, [data]);

  const account_url =
    'https://www.spotify.com/us/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account';

  return (
    <nav className='bg-gray-500/0 w-2/6 h-16 absolute top-0 right-0 mt-4'>
      {user && (
        <ul className='flex items-center justify-end pr-5'>
          {user.product === 'free' && (
            <li className='bg-white-100 text-black rounded-full mr-6 py-2 px-5 text-sm font-bold tracking-wide hover:scale-105 hover:transition-all active:text-green-600 ease-in duration-50'>
              <Link href='https://www.spotify.com/us/premium/' target='_blank'>
                Explore Premium
              </Link>
            </li>
          )}
          <li className='bg-gray-500/30 text-white-100 rounded-full mr-6 py-2 px-5 text-sm font-normal tracking-wide hover:scale-105 hover:transition-all active:text-green-600 ease-in duration-50'>
            <Link href='https://www.spotify.com/us/download/' target='_blank'>
              Install App
            </Link>
          </li>
          <li>
            <button
              className='bg-gray-500/30 rounded-full p-1.5 hover:bg-gray-500/70 hover:scale-105 hover:transition-all active:opacity-30 active:scale-95 ease-in duration-50'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              <Image
                src={user.images[0].url}
                width={25}
                height={25}
                alt='Nav profile picture'
                className='rounded-full'
              />
            </button>

            {toggleDropdown && (
              <div className='bg-gray-500/30 rounded-md shadow-lg shadow-black absolute right-0 float-right p-1 mt-3 mr-5 text-left text-white-100 text-sm z-[1]'>
                <Link
                  href={account_url}
                  target='_blank'
                  className='block py-3 pl-3 pr-3 rounded-md w-full hover:bg-gray-800/60 hover:transition-all active:opacity-60 ease-in-out duration-100'
                >
                  <div className='flex justify-between items-center fill-white-100'>
                    <p>Account</p>
                    <IconExternal />
                  </div>
                </Link>
                <button
                  className='py-3 pl-3 pr-20 rounded-md hover:bg-gray-800/60 hover:transition-all active:opacity-60 ease-in-out duration-100'
                  onClick={() =>
                    signOut({ callbackUrl: 'http://localhost:3000/' })
                  }
                >
                  Sign Out
                </button>
              </div>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
