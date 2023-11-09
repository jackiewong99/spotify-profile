import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ArtistCard = ({ artist }) => {
  const img = artist.images[1];
  return (
    <motion.div className='shrink-0 p-2'>
      <Link href={`/top_artists/${artist.id}`}>
        <Image
          src={img.url}
          width={img.width}
          height={img.height}
          style={{
            width: '240px',
            height: '240px',
          }}
          alt='Artist image'
          className='rounded-full object-cover p-2 hover:border-4 hover:border-gray-500'
        />
      </Link>
      <div className='flex justify-center mt-3'>
        <Link
          href={`/top_artists/${artist.id}`}
          className='hover:underline hover:underline-offset-2 hover:decoration-solid hover:transition-all ease-in duration-100'
        >
          <h5 className='text-lg'>{artist.name}</h5>
        </Link>
      </div>
    </motion.div>
  );
};

export default ArtistCard;
