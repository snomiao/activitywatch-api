import { z } from "zod";

// common
const zAwEvent = z.object({
  timestamp: z.coerce.date(),
  duration: z.number(),
  data: z.unknown(),
});
export const zAwBucket = z.object({
  id: z.string(),
  created: z.coerce.date(),
  name: z.string().nullable(),
  type: z.string(),
  client: z.string(),
  hostname: z.string(),
  events: zAwEvent.array(),
});
export const zAwExport = z.object({
  buckets: z.record(z.string(), zAwBucket),
});

// win
const zAwWinData = z.object({ app: z.string(), title: z.string() });
const zAwWinEvent = zAwEvent.extend({ data: zAwWinData });
export const zAwWinBucket = zAwBucket.extend({
  client: z.enum(["aw-client-window"]),
  events: zAwWinEvent.array(),
});

// afk
const zAwAfkData = z.object({ status: z.enum(["afk", "not-afk"]) });
const zAwAfkEvent = zAwEvent.extend({ data: zAwAfkData });
export const zAwAfkBucket = zAwBucket.extend({
  client: z.enum(["aw-client-afk"]),
  events: zAwAfkEvent.array(),
});