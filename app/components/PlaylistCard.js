import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PlaylistCard = ({ playlist }) => {
  return (
    <motion.div className='bg-black rounded-md p-5 shrink-0 hover:bg-black/50 hover:transition-all ease-in duration-100'>
      <Image
        src={playlist.images[0].url}
        width={240}
        height={240}
        style={{
          width: '240px',
          height: '240px',
        }}
        alt='Playlist image'
        className='object-cover'
      />
      <div id='playlist-card-info' className='flex flex-col mt-3 mb-3'>
        <Link
          href={`/playlists/${playlist.id}`}
          className='hover:underline hover:underline-offset-2 hover:decoration-solid hover:transition-all ease-in duration-100'
        >
          <h5 className='max-w-[240px] text-lg line-clamp-1'>
            {playlist.name}
          </h5>
        </Link>
        <h6 className='text-gray-500 text-sm'>{playlist.owner.display_name}</h6>
      </div>
    </motion.div>
  );
};

export default PlaylistCard;
