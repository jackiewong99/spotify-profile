'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { fetchTopArtistsOnly, catchErrors } from '@/components/utils/profile';
// Components
import ArtistCard from './ArtistCard';

const ArtistsGrid = () => {
  const { data } = useSession();
  const [artists, setArtists] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const artistList = await fetchTopArtistsOnly(data);
      setArtists(artistList.artists.items);
    };

    catchErrors(fetchData());
  }, [data]);

  return (
    <div className='flex flex-col pt-32 pl-44'>
      <h1 className='text-3xl mb-8'>Your Top Artists</h1>
      {artists && (
        <div className='flex gap-7 flex-wrap mb-20'>
          {artists.map((artist, i) => {
            return <ArtistCard artist={artist} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ArtistsGrid;
