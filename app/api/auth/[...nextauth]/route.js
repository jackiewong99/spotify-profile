import NextAuth from 'next-auth/next';
import SpotifyProvider from 'next-auth/providers/spotify';
import { getRefreshToken } from '@/components/utils/profile';

const refreshAccessToken = async token => {
  try {
    const refreshedTokens = await getRefreshToken(token);

    return {
      ...token,
      accessToken: refreshedTokens.acecss_token,
      accessTokenExpires: Date.now + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
};
const scope =
  'user-read-private user-read-email playlist-read-private playlist-read-collaborative streaming user-library-read user-top-read user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played user-follow-read';

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization: { params: { scope: scope } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_in * 1000,
          user,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        console.log('Current access token is valid');
        return token;
      }

      console.log('Access token has expired, refreshing access token...');
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.username = token.username;
      }

      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
