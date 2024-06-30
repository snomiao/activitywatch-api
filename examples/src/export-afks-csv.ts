import { ActivityWatchAPI } from "activitywatch-api";
import { csvFormat } from "d3";
import { values } from "rambda";

const api = new ActivityWatchAPI({
  baseUrl: "http://localhost:5600/api",
}).v0;

const exports = await api.getExportAllResource();
const data = values(exports.buckets!)
  .flat()
  .filter((e) => e.client.match("afk"))
  .map((e) => e.events!)
  .map((e) =>
    e.map((e) => ({
      timestamp: e.timestamp,
      duration: e.duration,
      ...e.data, // title and app
    }))
  )
  .flat();

console.log(csvFormat(data));
