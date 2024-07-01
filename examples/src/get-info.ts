import { ActivityWatchAPI } from "activitywatch-api";

const api = new ActivityWatchAPI({
  baseUrl: "http://localhost:5600/api",
}).v0;

const info = await api.getInfoResource();
console.log(info);
