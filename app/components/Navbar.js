import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ user }) => {
  const smallUserImg = user.images[0];

  return (
    <nav className='bg-gray-500/0 w-2/6 h-16 absolute top-0 right-0 mt-4'>
      <ul className='flex items-center justify-end pr-5'>
        <li className='bg-white-100 text-black rounded-full mr-6 py-2 px-5 text-sm font-bold tracking-wide'>
          <Link href='https://www.spotify.com/us/premium/' target='_blank'>
            Explore Premium
          </Link>
        </li>
        <li className='bg-gray-500/30 text-white-100 rounded-full mr-6 py-2 px-5 text-sm font-normal tracking-wide'>
          <Link href='https://www.spotify.com/us/download/' target='_blank'>
            Install App
          </Link>
        </li>
        <li className='bg-gray-500/30 rounded-full p-1.5'>
          <Image
            src={smallUserImg.url}
            width={25}
            height={25}
            alt='Nav profile picture'
            className='rounded-full'
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
