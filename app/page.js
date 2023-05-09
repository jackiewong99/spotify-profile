import Link from 'next/link';

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-white-100 bg-gray-800'>
      <div className='flex flex-col items-center'>
        <h1 className='mb-7 text-4xl font-bold'>Spotify Profile</h1>
        <Link
          href='/api/spotify_login'
          className='px-10 py-4 rounded-full text-base font-normal tracking-[0.15em] bg-green-600 transition-all hover:bg-green-700 hover:text-white-200 hover:duration-300'
        >
          LOG IN TO SPOTIFY
        </Link>
      </div>
    </main>
  );
};

export default Home;
