'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { dynamicSegmentFetch, catchErrors } from '@/components/utils/profile';
import { formatDuration, getPitchKey } from '@/components/utils/dataFormat';
// Components
import Image from 'next/image';
import Link from 'next/link';

const Track = ({ params }) => {
  const { data } = useSession();
  const trackPath = `tracks/${params.track_id}`;
  const audioFeaturesPath = `audio-features/${params.track_id}`;
  const [track, setTrack] = useState();
  const [audioFeatures, setAudioFeatures] = useState();
  const [albumImg, setAlbumImg] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const trackRes = await dynamicSegmentFetch(data, trackPath);
      const audioFeaturesRes = await dynamicSegmentFetch(
        data,
        audioFeaturesPath,
      );
      setTrack(trackRes.response);
      setAudioFeatures(audioFeaturesRes.response);
      setAlbumImg(trackRes.response.album.images[1]);
    };

    catchErrors(fetchData());
  }, [data, trackPath, audioFeaturesPath]);

  return (
    <div className='flex flex-col bg-gray-800 w-full min-h-screen text-white-100 pb-20'>
      {track && (
        <div className='pt-32 pl-44 pr-20'>
          <div className='flex gap-12 w-full'>
            <Image
              src={albumImg.url}
              alt='Album Image'
              width={albumImg.width}
              height={albumImg.height}
              className='object-cover'
            />
            <div
              id='track-info'
              className='flex flex-col justify-end items-start gap-3'
            >
              <h4 className='text-gray-500 pb-2'>Song</h4>
              <h1 className='text-7xl font-bold'>{track.name}</h1>
              <div className='flex items-center gap-3 w-full'>
                {track.artists.map(artist => {
                  return (
                    <Link
                      key={artist.id}
                      href={`/artists/${artist.id}`}
                      className='hover:underline hover:underline-offset-1 hover:decoration-solid hover:transition-all ease-in duration-100'
                    >
                      <h4>{artist.name}</h4>
                    </Link>
                  );
                })}
                <span className='text-xs'>&#x2022;</span>
                <Link
                  href={track.album.external_urls.spotify}
                  target='_blank'
                  className='hover:underline hover:underline-offset-1 hover:decoration-solid hover:transition-all ease-in duration-100'
                >
                  <h4>{track.album.name}</h4>
                </Link>
                <span className='text-xs'>&#x2022;</span>
                <h4>{track.album.release_date.slice(0, 4)}</h4>
              </div>
              <div className='flex items-center gap-3 w-full pb-6'>
                <h4>{formatDuration(track.duration_ms)}</h4>
                <span className='text-xs'>&#x2022;</span>
                <h4>Track #{track.track_number}</h4>
              </div>
              <button className='px-5 py-2 rounded-full bg-green-600 text-sm tracking-[0.16em] hover:bg-green-700/80 hover:text-white-200 hover:transition-all ease-in duration-150'>
                <Link href={track.external_urls.spotify} target='_blank'>
                  LISTEN ON SPOTIFY
                </Link>
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-9 pt-32'>
            <h2 className='text-4xl'>Other Stats</h2>
            <Table
              popularity={track.popularity}
              audioFeatures={audioFeatures}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Table = ({ popularity, audioFeatures }) => {
  return (
    <table className='border-collapse'>
      <tr>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{popularity}%</h3>
            <h4>Popularity</h4>
          </div>
        </td>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{getPitchKey(audioFeatures.key)}</h3>
            <h4>Key</h4>
          </div>
        </td>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{audioFeatures.danceability}</h3>
            <h4>Danceability</h4>
          </div>
        </td>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{audioFeatures.energy}</h3>
            <h4>Energy</h4>
          </div>
        </td>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{audioFeatures.tempo}</h3>
            <h4>Tempo (BPM)</h4>
          </div>
        </td>
      </tr>
      <tr>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{audioFeatures.instrumentalness}</h3>
            <h4>Instrumentalness</h4>
          </div>
        </td>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{audioFeatures.liveness}</h3>
            <h4>Liveness</h4>
          </div>
        </td>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{audioFeatures.loudness}</h3>
            <h4>Loudness</h4>
          </div>
        </td>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{audioFeatures.acousticness}</h3>
            <h4>Acousticness</h4>
          </div>
        </td>
        <td className='border border-gray-600 px-3 py-9'>
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <h3 className='text-3xl'>{audioFeatures.valence}</h3>
            <h4>Valence</h4>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default Track;
