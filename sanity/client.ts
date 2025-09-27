import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'q6mqeovz',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
