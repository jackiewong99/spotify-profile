const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 text-white-100 bg-gray-800'>
      <h1 className='text-3xl mb-7'>Spotify Profile</h1>
      <a
        href='/'
        className='text-2xl font-bold bg-green-500 px-16 py-4 rounded-full hover:bg-green-600 hover:text-white-200'
      >
        Log In To Spotify
      </a>
    </main>
  );
};

export default Home;
