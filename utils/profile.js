// Spotify API calls
const getUser = async headers => {
  const result = await fetch('https://api.spotify.com/v1/me', headers);
  return await result.json();
};

const getFollowedArtists = async headers => {
  const result = await fetch(
    'https://api.spotify.com/v1/me/following?type=artist',
    headers,
  );
  return await result.json();
};

const getUserPlaylists = async headers => {
  const result = await fetch(
    'https://api.spotify.com/v1/me/playlists?offset=0&limit=7',
    headers,
  );
  return await result.json();
};

const getTopArtists = async headers => {
  const result = await fetch(
    'https://api.spotify.com/v1/me/top/artists?offset=0&limit=7&time_range=long_term',
    headers,
  );
  return await result.json();
};

const getTopTracks = async headers => {
  const result = await fetch(
    'https://api.spotify.com/v1/me/top/tracks?offset=0&limit=7&time_range=long_term',
    headers,
  );
  return await result.json();
};

export const fetchProfile = async data => {
  const token = data.user.accessToken;
  const headers = {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  };

  const user = await getUser(headers);
  const followedArtists = await getFollowedArtists(headers);
  const playlists = await getUserPlaylists(headers);
  const topArtists = await getTopArtists(headers);
  const topTracks = await getTopTracks(headers);

  return {
    user: user,
    followedArtists: followedArtists,
    playlists: playlists,
    topArtists: topArtists,
    topTracks: topTracks,
  };
};

// Catch errors from data fetch attempt
export const catchErrors = fn =>
  function (...args) {
    return fn(...args).catch(err => {
      console.error(err);
    });
  };
