import { z } from 'zod';

const bucketSchema = z.object({
  id: z.string(),
  created: z.coerce.date(),
  name: z.string().nullable(),
  type: z.string(),
  client: z.string(),
  hostname: z.string(),
  events: z.object({
    timestamp: z.coerce.date(),
    duration: z.number(),
    data: z.unknown()
  }).array(),
});
export const winBucketSchema = bucketSchema.extend(({
  events: z.object({
    timestamp: z.coerce.date(),
    duration: z.number(),
    data: z.object({ app: z.string(), title: z.string() })
  }).array(),
}));
export const exportSchema = z.object({
  buckets: z.record(z.string(), bucketSchema)
});
