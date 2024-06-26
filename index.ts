import { ActivityWatchAPI, type ApiConfig } from "./Api";
export * from "./Api";
export default ActivityWatchAPI;

export function AWApi<Options extends Omit<ApiConfig, "baseUrl">>(
  baseUrl: string,
  options?: Options
) {
  const { username, password } = new URL(baseUrl);

  // remove username and password from url
  const url = new URL(baseUrl);
  url.username = "";
  url.password = "";
  baseUrl = url.href;

  // fetch with basic auth
  return new ActivityWatchAPI({
    baseUrl,
    ...options,
    baseApiParams: {
      ...options?.baseApiParams,
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        ...options?.baseApiParams?.headers,
      },
    },
  }).v0;
}
