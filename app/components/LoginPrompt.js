import { signIn } from 'next-auth/react';

const LoginPrompt = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-white-100 bg-gray-800'>
      <div className='flex flex-col items-center'>
        <h1 className='mb-7 text-4xl font-bold'>Spotify Profile</h1>
        <button
          onClick={() => signIn('spotify', { callbackUrl: '/profile' })}
          className='px-10 py-4 rounded-full text-base font-normal tracking-[0.15em] bg-green-600 transition-all hover:bg-green-700/80 hover:text-white-200 ease-in duration-150'
        >
          LOG IN TO SPOTIFY
        </button>
      </div>
    </main>
  );
};

export default LoginPrompt;
