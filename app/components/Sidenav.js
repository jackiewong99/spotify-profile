import Image from 'next/image';
import Link from 'next/link';
import spotifyIcon from '../../public/images/icons/Spotify_Icon_RGB_Green.png';

const Sidenav = () => {
  return (
    <nav className='bg-black text-white-100 w-28 flex flex-col items-center justify-around'>
      <Image src={spotifyIcon} width={70} height={70} alt='Spotify icon' />
      <h1>Sidebar</h1>
      <Link href='/'>Profile</Link>
      <Link href='/'>Top Artists</Link>
      <Link href='/'>Top Tracks</Link>
      <Link href='/'>Recent</Link>
      <Link href='/'>Playlists</Link>
      <Link href='/'>Github</Link>
    </nav>
  );
};

export default Sidenav;
