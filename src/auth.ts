import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getDB } from './drizzle/db';
import { getServerEnv } from './config/env';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(getDB()),
  providers: [
    GoogleProvider({
      clientId: getServerEnv().AUTH_GOOGLE_ID,
      clientSecret: getServerEnv().AUTH_GOOGLE_SECRET,
    }),
  ],
});
