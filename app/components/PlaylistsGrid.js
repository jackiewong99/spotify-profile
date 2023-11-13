'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { fetchPlaylistsOnly, catchErrors } from '@/components/utils/profile';
import PlaylistCard from './PlaylistCard';

const PlaylistsGrid = () => {
  const { data } = useSession();
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const userPlaylists = await fetchPlaylistsOnly(data);
      setPlaylists(userPlaylists.playlists);
    };

    catchErrors(fetchData());
  }, [data]);
  return (
    <div className='flex flex-col pt-32 pl-44'>
      <h2 className='text-3xl mb-8'>Your Playlists</h2>
      {playlists && (
        <div className='flex flex-wrap gap-6 mb-20'>
          {playlists.items.map(playlist => {
            return <PlaylistCard playlist={playlist} key={playlist.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PlaylistsGrid;
