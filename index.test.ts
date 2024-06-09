import { ActivityWatchAPI } from "./Api";

const baseUrl =
  process.env.ACTIVITY_WATCH_BASE_URL || "http://localhost:5600/api";
const $aw = new ActivityWatchAPI({ baseUrl }).v0;
it("should get info", async () => {
  const info = await $aw.getInfoResource();
  expect(info).toBeDefined();
});
it("should get afk bucket", async () => {
  const info = await $aw.getInfoResource();
  const id = "aw-watcher-afk_" + info.hostname;

  const buckets = await $aw.getBucketsResource();
  expect(buckets[id].hostname).toBe(info.hostname);

  expect(buckets).toBeDefined();
});
