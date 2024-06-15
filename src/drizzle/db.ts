import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import { serverEnv } from '@/config/env';

export const getDB = () => {
  const { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } = serverEnv;

  const turso = createClient({
    url: TURSO_DATABASE_URL!,
    authToken: TURSO_AUTH_TOKEN,
  });

  return drizzle(turso);
};
