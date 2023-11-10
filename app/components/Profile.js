'use client';
import { useEffect, useState } from 'react';
import {
  catchErrors,
  fetchProfile,
  formatDuration,
} from '@/components/utils/profile';
import { motion } from 'framer-motion';
// Components
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import PlaylistCard from './PlaylistCard';
import ArtistCard from './ArtistCard';
import TrackCard from './TrackCard';

/*
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
        className='flex flex-col w-full mt-32 mb-28 pl-44 overflow-hidden'
      >
        <h2 className='text-3xl font-normal mb-8'>Playlists</h2>
        {playlists && (
          <motion.div
            id='playlist-carousel'
            className='cursor-grab'
            drag='x'
            dragConstraints={{ left: -1800, right: 0 }}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 50 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div id='playlist-inner-carousel' className='flex gap-5'>
              {playlists.items.map((playlist, i) => {
                return <PlaylistCard playlist={playlist} key={i} />;
              })}
              <motion.div className='flex justify-center items-center flex-shrink-0 w-[280px]'>
                <Link
                  href='/playlists'
                  className='hover:underline hover:underline-offset-2 hover:decoration-solid hover:transition-all ease-in duration-100'
                >
                  <h5>SEE MORE</h5>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div
        id='top-artists'
        className='flex flex-col w-full my-20 pl-44 overflow-hidden'
      >
        <h2 className='text-3xl font-normal mb-8'>Your Top Artists</h2>
        {topArtists && (
          <motion.div
            className='cursor-grab'
            drag='x'
            dragConstraints={{ left: -1600, right: 0 }}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 50 }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div className='flex gap-7'>
              {topArtists.items.map((artist, i) => {
                return <ArtistCard artist={artist} key={i} />;
              })}
              <motion.div className='flex justify-center items-center flex-shrink-0 w-60'>
                <Link
                  href='/top_artists'
                  className='hover:underline hover:underline-offset-2 hover:decoration-solid hover:transition-all ease-in duration-100'
                >
                  <h5>SEE MORE</h5>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div
        id='top-tracks'
        className='flex flex-col w-[95%] my-20 pl-44 overflow-hidden'
      >
        <h2 className='text-3xl font-normal mb-8'>Your Top Tracks</h2>
        {topTracks && (
          <div className='grid grid-cols-2 gap-7 w-full'>
            <div id='tracks-col-1'>
              {topTracks.items.slice(0, 5).map((track, i) => {
                return <TrackCard track={track} key={i} />;
              })}
            </div>
            <div id='tracks-col-2'>
              {topTracks.items.slice(5, 10).map((track, i) => {
                return <TrackCard track={track} key={i} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
