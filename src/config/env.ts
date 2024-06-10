import { z } from 'zod';

const serverEnvSchema = z.object({});

export const getServerEnv = () => {
  return serverEnvSchema.parse({});
};

const publicEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.coerce.string(),
});
export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});
