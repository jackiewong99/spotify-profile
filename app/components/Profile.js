'use client';
import { useEffect, useState } from 'react';
import { catchErrors } from '@/components/utils/profile';
import { fetchProfile } from '@/components/utils/profile';
import { motion } from 'framer-motion';
// Components
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import PlaylistCard from './PlaylistCard';

/*
    topArtists: topArtists,
    topTracks: topTracks,
*/

const Profile = ({ data }) => {
  const [user, setUser] = useState();
  const [userImg, setUserImg] = useState();
  const [followedArtists, setFollowedArtists] = useState();
  const [playlists, setPlaylists] = useState();
  const [topArtists, setTopArtists] = useState();
  const [topTracks, setTopTracks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await fetchProfile(data);
      setUser(userInfo.user);
      setUserImg(userInfo.user.images[1]);
      setFollowedArtists(userInfo.followedArtists);
      setPlaylists(userInfo.playlists);
      setTopArtists(userInfo.topArtists);
      setTopTracks(userInfo.topTracks);

      console.log(userInfo);
    };
    catchErrors(fetchData());
  }, [data]);

  return (
    <div
      id='profile-info'
      className='flex flex-col items-start min-h-screen text-white-100 bg-gray-800'
    >
      {user && (
        <div>
          <Navbar user={user} />
          <div className='flex items-center h-[30vh] w-full mb-28 pt-52 pl-44'>
            {userImg && (
              <div className='flex justify-start'>
                <Image
                  src={userImg.url}
                  width={userImg.width}
                  height={userImg.height}
                  alt='Profile picture'
                  className='rounded-full'
                />
              </div>
            )}
            <div className='flex flex-col justify-start pl-16'>
              <p className='text-sm'>Profile</p>
              <h1 className='text-8xl font-bold tracking-tighter'>{`${user.display_name}`}</h1>
              <div className='flex justify-start items-center mt-5'>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='text-2xl text-green-600 font-semibold'>
                    {user.followers.total}
                  </h2>
                  <h4 className='text-gray-500 font-normal text-sm tracking-wide'>
                    Followers
                  </h4>
                </div>
                <div className='flex flex-col items-center justify-center ml-12'>
                  <h2 className='text-2xl text-green-600 font-semibold'>
                    {followedArtists.artists.total}
                  </h2>
                  <h4 className='text-gray-500 font-normal text-sm tracking-wide'>
                    Following
                  </h4>
                </div>
                <div className='flex flex-col items-center justify-center ml-12'>
                  <h2 className='text-2xl text-green-600 font-semibold'>
                    {playlists.total}
                  </h2>
                  <h4 className='text-gray-500 font-normal text-sm tracking-wide'>
                    Playlists
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        id='playlists'
        className='flex flex-col w-full mt-32 mb-40 pl-44 overflow-hidden'
      >
        <h2 className='text-3xl font-normal mb-8'>Playlists</h2>
        {playlists && (
          <motion.div
            id='playlist-carousel'
            className='cursor-grab'
            drag='x'
            dragConstraints={{ left: -900, right: 0 }}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 50 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div id='playlist-inner-carousel' className='flex gap-5'>
              {playlists.items.map((playlist, i) => {
                return <PlaylistCard playlist={playlist} key={i} />;
              })}
              <motion.div className='w-[180px] h-[255px] flex justify-center items-center'>
                <Link href='/playlists'>
                  <h5>See more</h5>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div id='top-artists'></div>
    </div>
  );
};

export default Profile;
