import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import ArtistsGrid from '../components/ArtistsGrid';

const TopArtists = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/');
  }

  return (
    <div className='flex flex-col bg-gray-800 text-white-100 w-full min-h-screen'>
      <ArtistsGrid />
    </div>
  );
};

export default TopArtists;
