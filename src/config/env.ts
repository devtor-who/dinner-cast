import { z } from 'zod';
import { getRequestContext } from '@cloudflare/next-on-pages';

export const getServerEnv = () => {
  return getRequestContext().env;
};

const publicEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.coerce.string(),
});
export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});
