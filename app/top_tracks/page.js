import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import TopTracksList from '../components/TopTracksList';

const TopTracks = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/');
  }

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-800 text-white-100'>
      <TopTracksList />
    </div>
  );
};

export default TopTracks;
