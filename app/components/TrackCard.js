import { formatDuration } from '@/components/utils/profile';
import Image from 'next/image';
import Link from 'next/link';

const getArtistsList = artists => {
  const names = [];
  artists.map(artist => names.push(artist.name));
  return names.join(', ');
};

const TrackCard = ({ track }) => {
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
            width: 'auto',
            height: 'auto',
          }}
          alt='Album cover'
        />
      </div>
      <div className='flex flex-col justify-end basis-1/3 ml-5'>
        <Link
          href={`/track/${track.id}`}
          className='hover:underline hover:underline-offset-2 hover:decoration-solid hover:transition-all ease-in duration-100'
        >
          <h5 className='line-clamp-1'>{track.name}</h5>
        </Link>
        <h5 className='text-gray-500'>{getArtistsList(artists)}</h5>
      </div>
      <div className='flex justify-start items-center basis-1/3 text-gray-500'>
        <h5 className='line-clamp-1'>{track.album.name}</h5>
      </div>
      <div className='flex justify-end items-center basis-1/5 text-gray-500'>
        <h5>{formatDuration(track.duration_ms)}</h5>
      </div>
    </div>
  );
};

export default TrackCard;
