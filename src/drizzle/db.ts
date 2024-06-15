import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import { getServerEnv } from '@/config/env';

export const getDB = async () => {
  const { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } = await getServerEnv();

  const turso = createClient({
    url: TURSO_DATABASE_URL!,
    authToken: TURSO_AUTH_TOKEN,
  });

  return drizzle(turso);
};
