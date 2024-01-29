'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { dynamicSegmentFetch, catchErrors } from '@/components/utils/profile';
// Components
import Image from 'next/image';
import Link from 'next/link';
import TrackCard from '../../components/TrackCard';

const PlaylistPage = ({ params }) => {
  const { data } = useSession();
  const path = `playlists/${params.playlist_id}`;
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await dynamicSegmentFetch(data, path);
      setPlaylist(response);
      console.log(response);
    };
    catchErrors(fetchData());
  }, [data, path]);

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-800 text-white-100 pb-20'>
      {playlist && (
        <div className='flex flex-col pt-32 pl-44 pr-20'>
          {/* PLAYLIST INFORMATION */}
          <div className='flex pb-10'>
            <Image
              src={playlist.images[0].url}
              alt='Playlist Image'
              width={300}
              height={300}
              className='object-cover'
            />
            <div className='flex flex-col items-start justify-end pl-12'>
              <h3 className='text-gray-500 pb-4'>Playlist</h3>
              <h1 className='text-5xl font-bold pb-5'>{playlist.name}</h1>
              {playlist.description !== '' ? (
                <div className='flex items-center gap-3 w-full text-gray-500 pb-5'>
                  <h5>{playlist.description}</h5>
                  <span className='text-xs'>&#x2022;</span>
                  <Link
                    href={playlist.owner.external_urls.spotify}
                    target='_blank'
                    className='hover:text-white-100 hover:underline hover:underline-offset-1 hover:decoration-solid hover:transition-all ease-in duration-100'
                  >
                    <h5>{playlist.owner.display_name}</h5>
                  </Link>
                </div>
              ) : (
                <div className='flex items-center text-gray-500 pb-5'>
                  <Link
                    href={playlist.owner.external_urls.spotify}
                    target='_blank'
                    className='hover:text-white-100 hover:underline hover:underline-offset-1 hover:decoration-solid hover:transition-all ease-in duration-100'
                  >
                    <h5>{playlist.owner.display_name}</h5>
                  </Link>
                </div>
              )}
              <div className='flex items-center gap-3 w-full text-gray-500'>
                <h3>
                  {playlist.followers.total
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  Followers
                </h3>
                <span className='text-xs'>&#x2022;</span>
                {playlist.public ? <h3>Public</h3> : <h3>Private</h3>}
              </div>
            </div>
          </div>
          {/* TRACK LIST */}
          <div id='track-list' className='bg-black p-3 rounded-md'>
            {playlist.tracks.items.map(trackItem => {
              const track = trackItem.track;
              return (
                <TrackCard
                  key={trackItem.track.id}
                  track={track}
                  externalUrl={track.external_urls.spotify}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistPage;
