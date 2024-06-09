import { z } from 'zod';

const serverEnvSchema = z.object({});

export const getServerEnv = () => {
  return serverEnvSchema.parse({});
};

const clientEnvSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.coerce.string(),
});
export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});
