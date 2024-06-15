import { z } from 'zod';

const serverEnvSchema = z.object({
  TURSO_DATABASE_URL: z.coerce.string(),
  TURSO_AUTH_TOKEN: z.coerce.string(),
  AUTH_GOOGLE_ID: z.coerce.string(),
  AUTH_GOOGLE_SECRET: z.coerce.string(),
});
export const serverEnv = serverEnvSchema.parse(process.env);

const publicEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.coerce.string(),
});
export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});
