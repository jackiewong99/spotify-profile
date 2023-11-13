import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import PlaylistsGrid from '../components/PlaylistsGrid';

const Playlists = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/');
  }

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-800 text-white-100'>
      <PlaylistsGrid />
    </div>
  );
};

export default Playlists;
