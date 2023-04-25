const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 text-white-100 bg-gray-800'>
      <h1 className='mb-7 text-4xl font-black'>Spotify Profile</h1>
      <a
        href='/'
        className='text-base font-normal tracking-[0.15em] bg-green-500 px-10 py-4 rounded-full transition-all hover:bg-green-600 hover:text-white-200 hover:duration-300'
      >
        LOG IN TO SPOTIFY
      </a>
    </main>
  );
};

export default Home;
