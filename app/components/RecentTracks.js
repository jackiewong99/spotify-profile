'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getRecentlyPlayed, catchErrors } from '@/components/utils/profile';
// Components
import TrackCard from './TrackCard';

const RecentTracks = () => {
  const { data } = useSession();
  const [trackList, setTrackList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { tracks } = await getRecentlyPlayed(data);
      setTrackList(tracks);
    };
    catchErrors(fetchData());
  }, [data]);

  return (
    <div className='flex flex-col pt-32 pl-44'>
      <h2 className='text-3xl mb-8'>Recently Played</h2>
      {trackList && (
        <div className='flex flex-col mb-20 w-[95%]'>
          {trackList.items.map(trackItem => {
            const { track } = trackItem;
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

export default RecentTracks;
