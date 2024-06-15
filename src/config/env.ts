import { z } from 'zod';
import { getRequestContext } from '@cloudflare/next-on-pages';

const serverEnvSchema = z.object({
  TURSO_DATABASE_URL: z.coerce.string(),
  TURSO_AUTH_TOKEN: z.coerce.string(),
});

export const getServerEnv = async () => {
  const { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } = getRequestContext().env;

  return serverEnvSchema.parse({
    TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN,
  });
};

const publicEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.coerce.string(),
});
export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});
