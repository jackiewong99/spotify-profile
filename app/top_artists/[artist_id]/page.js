'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { dynamicSegmentFetch, catchErrors } from '@/components/utils/profile';
import { motion, useAnimate } from 'framer-motion';
// Components
import Image from 'next/image';
import Link from 'next/link';

const ArtistPage = ({ params }) => {
  const { data } = useSession();
  const path = `artists/${params.artist_id}`;
  const [artist, setArtist] = useState();
  const [genres, setGenres] = useState();
  const [scope, animate] = useAnimate();

  const capitalizeGenres = genres => {
    for (let i = 0; i < genres.length; i++) {
      const genre = genres[i].split(' ');
      if (genre.length === 1) {
        if (genre[0] === 'r&b') {
          genres[i] = genre[0].toUpperCase();
        } else {
          genres[i] = genre[0].charAt(0).toUpperCase() + genre[0].substring(1);
        }
      } else {
        for (let j = 0; j < genre.length; j++) {
          if (genre[j] === 'r&b') {
            genre[j] = genre[j].toUpperCase();
          } else {
            genre[j] = genre[j].charAt(0).toUpperCase() + genre[j].substring(1);
          }
        }
        genres[i] = genre.join(' ');
      }
    }
    setGenres(genres);
    return;
  };

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await dynamicSegmentFetch(data, path);
      setArtist(response);
      capitalizeGenres(response.genres);
    };
    catchErrors(fetchData());
  }, [data, path]);

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-800 text-white-100 overflow-y-auto pb-20'>
      {artist && (
        <div className='flex justify-around pt-32 pl-44 pr-20'>
          <div id='artist-banner'>
            <Image
              src={artist.images[0].url}
              alt='Image of Artist'
              width={artist.images[0].width}
              height={artist.images[0].height}
              style={{
                width: '557px',
                height: '557px',
              }}
              className='object-cover'
            />
            <Link
              href={artist.external_urls.spotify}
              target='_blank'
              className='hover:underline hover:underline-offset-3 hover:decoration-solid hover:transition-all ease-in duration-100'
            >
              <h3 className='text-8xl font-bold'>{artist.name}</h3>
            </Link>
          </div>
          <div
            id='artist-stats'
            className='flex flex-col justify-evenly items-start'
          >
            <div id='popularity'>
              <h5 className='text-9xl font-bold text-green-600'>
                {artist.popularity}%
              </h5>
              <h5 className='text-2xl text-gray-500 pt-3'>Popularity</h5>
            </div>
            <div id='followers'>
              <motion.h5 className='text-9xl font-bold text-green-600'>
                {artist.followers.total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </motion.h5>
              <h5 className='text-2xl text-gray-500 pt-3'>Followers</h5>
            </div>
            <hr className='block border-gray-500 border-solid border-t-2 h-2 w-full' />
            <div id='genres'>
              {genres.map((genre, index) => {
                return (
                  <h5
                    key={index}
                    className='text-2xl font-bold text-gray-500 pb-1'
                  >
                    {genre}
                  </h5>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistPage;
