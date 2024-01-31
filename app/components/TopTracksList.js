'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { fetchTopTracksOnly, catchErrors } from '@/components/utils/profile';
// Components
import TrackCard from './TrackCard';

const TopTracksList = () => {
  const { data } = useSession();
  const [trackList, setTrackList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { tracks } = await fetchTopTracksOnly(data);
      setTrackList(tracks);
    };
    catchErrors(fetchData());
  }, [data]);

  return (
    <div className='flex flex-col pt-32 pl-44 pr-20'>
      <h2 className='text-3xl mb-8'>Your Top Tracks</h2>
      {trackList && (
        <div className='flex flex-col justify-center mb-20 p-3 rounded-md bg-black'>
          {trackList.items.map(track => {
            return (
              <TrackCard
                track={track}
                externalUrl={track.external_urls.spotify}
                key={track.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TopTracksList;
