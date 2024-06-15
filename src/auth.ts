import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getDB } from './drizzle/db';
import { serverEnv } from './config/env';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(getDB()),
  providers: [
    GoogleProvider({
      clientId: serverEnv.AUTH_GOOGLE_ID,
      clientSecret: serverEnv.AUTH_GOOGLE_SECRET,
    }),
  ],
  trustHost: true,
});
