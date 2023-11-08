'use client';
// Hooks
import { usePathname } from 'next/navigation';
// Components
import Image from 'next/image';
import Link from 'next/link';
import spotifyIcon from '../../public/images/icons/Spotify_Icon_RGB_Green.png';
import {
  IconUser,
  IconMicrophone,
  IconMusic,
  IconTime,
  IconPlaylist,
  IconGithub,
} from './icons';

const Sidenav = () => {
  const pathname = usePathname();
  return (
    <nav className='bg-black text-xs font-normal w-28 h-screen flex flex-col items-center justify-between py-12 fixed'>
      <div className='basis-2/12'>
        <Link href='/'>
          <Image
            src={spotifyIcon}
            width={60}
            height={60}
            priority={false}
            alt='Spotify icon'
          />
        </Link>
      </div>
      <div className='flex flex-col basis-4/6 items-center justify-evenly'>
        <Link
          href='/'
          className={`${
            pathname === '/' ? 'text-green-600 fill-green-600' : 'fill-gray-500'
          } text-gray-500 hover:text-white-100 hover:fill-white-100 active:text-green-700 active:fill-green-700 hover:transition-all ease-in duration-200`}
        >
          <div className='flex flex-col justify-between items-center'>
            <div className='mb-2'>
              <IconUser />
            </div>
            <p>Profile</p>
          </div>
        </Link>
        <Link
          href='/top_artists'
          className={`${
            pathname === '/top_artists'
              ? 'text-green-600 fill-green-600'
              : 'fill-gray-500'
          } text-gray-500 hover:text-white-100 hover:fill-white-100 active:text-green-700 active:fill-green-700 hover:transition-all ease-in duration-200`}
        >
          <div className='flex flex-col justify-between items-center'>
            <div className='mb-2'>
              <IconMicrophone />
            </div>
            <p>Top Artists</p>
          </div>
        </Link>
        <Link
          href='/top_tracks'
          className={`${
            pathname === '/top_tracks'
              ? 'text-green-600 fill-green-600'
              : 'fill-gray-500'
          } text-gray-500 hover:text-white-100 hover:fill-white-100 active:text-green-700 active:fill-green-700 hover:transition-all ease-in duration-200`}
        >
          <div className='flex flex-col justify-between items-center'>
            <div className='mb-2'>
              <IconMusic />
            </div>
            <p>Top Tracks</p>
          </div>
        </Link>
        <Link
          href='/recent'
          className={`${
            pathname === '/recent'
              ? 'text-green-600 fill-green-600'
              : 'fill-gray-500'
          } text-gray-500 hover:text-white-100 hover:fill-white-100 active:text-green-700 active:fill-green-700 hover:transition-all ease-in duration-200`}
        >
          <div className='flex flex-col justify-between items-center'>
            <div className='mb-2'>
              <IconTime />
            </div>
            <p>Recent</p>
          </div>
        </Link>
        <Link
          href='/playlists'
          className={`${
            pathname === '/playlists'
              ? 'text-green-600 fill-green-600'
              : 'fill-gray-500'
          } text-gray-500 hover:text-white-100 hover:fill-white-100 active:text-green-700 active:fill-green-700 hover:transition-all ease-in duration-200`}
        >
          <div className='flex flex-col justify-between items-center'>
            <div className='mb-2'>
              <IconPlaylist />
            </div>
            <p>Playlists</p>
          </div>
        </Link>
      </div>
      <div className='flex flex-col justify-end basis-2/12'>
        <Link
          href='https://github.com/jackiewong99/spotify-profile'
          target='_blank'
          className='fill-gray-500 hover:fill-blue-500 active:fill-blue-600 hover:transition-all ease-in duration-200'
        >
          <div className='flex flex-col justify-center items-center'>
            <IconGithub />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Sidenav;
