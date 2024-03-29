import { formatDuration } from '@/components/utils/dataFormat';
import Image from 'next/image';
import Link from 'next/link';
import { IconExternal } from './icons';

const getArtistsList = artists => {
  const names = [];
  artists.map(artist => names.push(artist.name));
  return names.join(', ');
};

const TrackCard = ({ track, externalUrl }) => {
  const albumCover = track.album.images[2];
  const artists = track.artists;

  return (
    <div
      id='music-card'
      className='flex max-h-16 p-2 rounded-md hover:bg-gray-600/50 hover:transition-all ease-in duration-100'
    >
      <div className='flex justify-start basis-auto'>
        <Image
          src={albumCover.url}
          width={albumCover.width}
          height={albumCover.height}
          style={{
            width: '50px',
            height: '50px',
          }}
          alt='Album cover'
        />
      </div>
      <div className='flex flex-col justify-end items-start basis-1/3 ml-5'>
        <Link
          href={`/track/${track.id}`}
          className='hover:underline hover:underline-offset-2 hover:decoration-solid hover:transition-all ease-in duration-100'
        >
          <h5 className='line-clamp-1'>{track.name}</h5>
        </Link>
        <div className='flex gap-2'>
          {artists.map((artist, index) => {
            if (index === artists.length - 1) {
              return (
                <Link
                  key={artist.id}
                  href={`/artists/${artist.id}`}
                  className='text-gray-500 hover:text-white-100 hover:underline hover:underline-offset-1 hover:decoration-solid hover:transition-all ease-in duration-100'
                >
                  <h5>{artist.name}</h5>
                </Link>
              );
            }

            return (
              <Link
                key={artist.id}
                href={`/artists/${artist.id}`}
                className='text-gray-500 hover:text-white-100 hover:underline hover:underline-offset-1 hover:decoration-solid hover:transition-all ease-in duration-100'
              >
                <h5>{artist.name}, </h5>
              </Link>
            );
          })}
        </div>
      </div>
      <div className='flex justify-start items-center basis-1/3 text-gray-500'>
        <Link
          href={track.album.external_urls.spotify}
          target='_blank'
          className='text-gray-500 hover:text-white-100 hover:underline hover:underline-offset-1 hover:decoration-solid hover:transition-all ease-in duration-100'
        >
          <h5 className='line-clamp-1'>{track.album.name}</h5>
        </Link>
      </div>
      <div className='flex justify-end items-center basis-1/5 text-gray-500'>
        <h5>{formatDuration(track.duration_ms)}</h5>
      </div>
      {externalUrl && (
        <div className='flex justify-end items-center basis-[5%] text-gray-500'>
          <Link
            href={externalUrl}
            target='_blank'
            className='fill-white-100 hover:fill-green-600 hover:transition-all ease-in duration-100'
          >
            <IconExternal />
          </Link>
        </div>
      )}
    </div>
  );
};

export default TrackCard;
