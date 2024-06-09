/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Info {
  hostname?: string;
  version?: string;
  testing?: boolean;
  device_id?: string;
}

export interface CreateBucket {
  client: string;
  type: string;
  hostname: string;
}

/**
 * Bucket
 * The Bucket model that is used in ActivityWatch
 */
export interface Bucket {
  /** The unique id for the bucket */
  id: string;
  /** The readable and renameable name for the bucket */
  name?: string;
  /** The event type */
  type: string;
  /** The name of the client that is reporting to the bucket */
  client: string;
  /** The hostname of the machine on which the client is running */
  hostname: string;
  /**
   * The creation datetime of the bucket
   * @format date-time
   */
  created?: string;
  data?: object;
  events?: Event[];
}

/**
 * Event
 * The Event model that is used in ActivityWatch
 */
export interface Event {
  /** @format date-time */
  timestamp: string;
  duration?: number;
  data?: object;
}

export interface Query {
  /** List of periods to query */
  timeperiods: string[];
  /** String list of query statements */
  query: string[];
}

/**
 * Export
 * The Export model that is used by ActivityWatch
 */
export interface Export {
  buckets?: Record<string, Bucket>;
}

export namespace V0 {
  /**
   * No description
   * @tags default
   * @name GetBucketsResource
   * @summary Get dict {bucket_name: Bucket} of all buckets
   * @request GET:/0/buckets/
   * @response `200` `Record<string,Bucket>` Success
   */
  export namespace GetBucketsResource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Record<string, Bucket>;
  }
  /**
   * No description
   * @tags default
   * @name DeleteBucketResource
   * @summary Delete a bucket
   * @request DELETE:/0/buckets/{bucket_id}
   * @response `200` `void` Success
   */
  export namespace DeleteBucketResource {
    export type RequestParams = {
      bucketId: string;
    };
    export type RequestQuery = {
      /** Needs to be =1 to delete a bucket it non-testing mode */
      force?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Returns True if successful, otherwise false if a bucket with the given ID already existed.
   * @tags default
   * @name PostBucketResource
   * @summary Create bucket
   * @request POST:/0/buckets/{bucket_id}
   * @response `200` `void` Success
   */
  export namespace PostBucketResource {
    export type RequestParams = {
      bucketId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateBucket;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags default
   * @name GetBucketResource
   * @summary Get metadata about bucket
   * @request GET:/0/buckets/{bucket_id}
   * @response `200` `Bucket` Success
   */
  export namespace GetBucketResource {
    export type RequestParams = {
      bucketId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Bucket;
  }
  /**
   * @description Can handle both single events and multiple ones. Returns the inserted event when a single event was inserted, otherwise None.
   * @tags default
   * @name PostEventsResource
   * @summary Create events for a bucket
   * @request POST:/0/buckets/{bucket_id}/events
   * @response `200` `void` Success
   */
  export namespace PostEventsResource {
    export type RequestParams = {
      bucketId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Event;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags default
   * @name GetEventsResource
   * @summary Get events from a bucket
   * @request GET:/0/buckets/{bucket_id}/events
   * @response `200` `(Event)[]` Success
   */
  export namespace GetEventsResource {
    export type RequestParams = {
      bucketId: string;
    };
    export type RequestQuery = {
      /** End date of events */
      end?: string;
      /** Start date of events */
      start?: string;
      /** the maximum number of requests to get */
      limit?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Event[];
  }
  /**
   * No description
   * @tags default
   * @name GetEventCountResource
   * @summary Get eventcount from a bucket
   * @request GET:/0/buckets/{bucket_id}/events/count
   * @response `200` `number` Success
   */
  export namespace GetEventCountResource {
    export type RequestParams = {
      bucketId: string;
    };
    export type RequestQuery = {
      /** End date of eventcount */
      end?: string;
      /** Start date of eventcount */
      start?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = number;
  }
  /**
   * No description
   * @tags default
   * @name DeleteEventResource
   * @summary Delete a single event from a bucket
   * @request DELETE:/0/buckets/{bucket_id}/events/{event_id}
   * @response `200` `void` Success
   */
  export namespace DeleteEventResource {
    export type RequestParams = {
      bucketId: string;
      eventId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags default
   * @name GetEventResource
   * @summary Get a single event from a bucket
   * @request GET:/0/buckets/{bucket_id}/events/{event_id}
   * @response `200` `Event` Success
   */
  export namespace GetEventResource {
    export type RequestParams = {
      bucketId: string;
      eventId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Event;
  }
  /**
   * No description
   * @tags default
   * @name GetBucketExportResource
   * @summary Export a bucket to a dataformat consistent across versions, including all events in it
   * @request GET:/0/buckets/{bucket_id}/export
   * @response `200` `Export` Success
   */
  export namespace GetBucketExportResource {
    export type RequestParams = {
      bucketId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Export;
  }
  /**
   * @description track of a state, how long it's in that state and when it changes. A single heartbeat always has a duration of zero. If the heartbeat was identical to the last (apart from timestamp), then the last event has its duration updated. If the heartbeat differed, then a new event is created. Such as: - Active application and window title - Example: aw-watcher-window - Currently open document/browser tab/playing song - Example: wakatime - Example: aw-watcher-web - Example: aw-watcher-spotify - Is the user active/inactive? Send an event on some interval indicating if the user is active or not. - Example: aw-watcher-afk Inspired by: https://wakatime.com/developers#heartbeats
   * @tags default
   * @name PostHeartbeatResource
   * @summary Heartbeats are useful when implementing watchers that simply keep
   * @request POST:/0/buckets/{bucket_id}/heartbeat
   * @response `200` `void` Success
   */
  export namespace PostHeartbeatResource {
    export type RequestParams = {
      bucketId: string;
    };
    export type RequestQuery = {
      /** Largest timewindow allowed between heartbeats for them to merge */
      pulsetime?: string;
    };
    export type RequestBody = Event;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags default
   * @name GetExportAllResource
   * @summary Exports all buckets and their events to a format consistent across versions
   * @request GET:/0/export
   * @response `200` `Export` Success
   */
  export namespace GetExportAllResource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Export;
  }
  /**
   * No description
   * @tags default
   * @name PostImportAllResource
   * @request POST:/0/import
   * @response `200` `void` Success
   */
  export namespace PostImportAllResource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Export;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags default
   * @name GetInfoResource
   * @summary Get server info
   * @request GET:/0/info
   * @response `200` `Info` Success
   */
  export namespace GetInfoResource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * An optional fields mask
       * @format mask
       */
      "X-Fields"?: string;
    };
    export type ResponseBody = Info;
  }
  /**
   * No description
   * @tags default
   * @name GetLogResource
   * @summary Get the server log in json format
   * @request GET:/0/log
   * @response `200` `void` Success
   */
  export namespace GetLogResource {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags default
   * @name PostQueryResource
   * @request POST:/0/query/
   * @response `200` `void` Success
   */
  export namespace PostQueryResource {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Name of the query (required if using cache) */
      name?: string;
    };
    export type RequestBody = Query;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title API
 * @version 1.0
 * @baseUrl /api
 */
export class ActivityWatchAPI<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v0 = {
    /**
     * No description
     *
     * @tags default
     * @name GetBucketsResource
     * @summary Get dict {bucket_name: Bucket} of all buckets
     * @request GET:/0/buckets/
     * @response `200` `Record<string,Bucket>` Success
     */
    getBucketsResource: (params: RequestParams = {}) =>
      this.request<Record<string, Bucket>, any>({
        path: `/0/buckets/`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name DeleteBucketResource
     * @summary Delete a bucket
     * @request DELETE:/0/buckets/{bucket_id}
     * @response `200` `void` Success
     */
    deleteBucketResource: (
      bucketId: string,
      query?: {
        /** Needs to be =1 to delete a bucket it non-testing mode */
        force?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/0/buckets/${bucketId}`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * @description Returns True if successful, otherwise false if a bucket with the given ID already existed.
     *
     * @tags default
     * @name PostBucketResource
     * @summary Create bucket
     * @request POST:/0/buckets/{bucket_id}
     * @response `200` `void` Success
     */
    postBucketResource: (bucketId: string, payload: CreateBucket, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/0/buckets/${bucketId}`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name GetBucketResource
     * @summary Get metadata about bucket
     * @request GET:/0/buckets/{bucket_id}
     * @response `200` `Bucket` Success
     */
    getBucketResource: (bucketId: string, params: RequestParams = {}) =>
      this.request<Bucket, any>({
        path: `/0/buckets/${bucketId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Can handle both single events and multiple ones. Returns the inserted event when a single event was inserted, otherwise None.
     *
     * @tags default
     * @name PostEventsResource
     * @summary Create events for a bucket
     * @request POST:/0/buckets/{bucket_id}/events
     * @response `200` `void` Success
     */
    postEventsResource: (bucketId: string, payload: Event, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/0/buckets/${bucketId}/events`,
        method: "POST",
        body: payload,
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name GetEventsResource
     * @summary Get events from a bucket
     * @request GET:/0/buckets/{bucket_id}/events
     * @response `200` `(Event)[]` Success
     */
    getEventsResource: (
      bucketId: string,
      query?: {
        /** End date of events */
        end?: string;
        /** Start date of events */
        start?: string;
        /** the maximum number of requests to get */
        limit?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Event[], any>({
        path: `/0/buckets/${bucketId}/events`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name GetEventCountResource
     * @summary Get eventcount from a bucket
     * @request GET:/0/buckets/{bucket_id}/events/count
     * @response `200` `number` Success
     */
    getEventCountResource: (
      bucketId: string,
      query?: {
        /** End date of eventcount */
        end?: string;
        /** Start date of eventcount */
        start?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<number, any>({
        path: `/0/buckets/${bucketId}/events/count`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name DeleteEventResource
     * @summary Delete a single event from a bucket
     * @request DELETE:/0/buckets/{bucket_id}/events/{event_id}
     * @response `200` `void` Success
     */
    deleteEventResource: (bucketId: string, eventId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/0/buckets/${bucketId}/events/${eventId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name GetEventResource
     * @summary Get a single event from a bucket
     * @request GET:/0/buckets/{bucket_id}/events/{event_id}
     * @response `200` `Event` Success
     */
    getEventResource: (bucketId: string, eventId: number, params: RequestParams = {}) =>
      this.request<Event, any>({
        path: `/0/buckets/${bucketId}/events/${eventId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name GetBucketExportResource
     * @summary Export a bucket to a dataformat consistent across versions, including all events in it
     * @request GET:/0/buckets/{bucket_id}/export
     * @response `200` `Export` Success
     */
    getBucketExportResource: (bucketId: string, params: RequestParams = {}) =>
      this.request<Export, any>({
        path: `/0/buckets/${bucketId}/export`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description track of a state, how long it's in that state and when it changes. A single heartbeat always has a duration of zero. If the heartbeat was identical to the last (apart from timestamp), then the last event has its duration updated. If the heartbeat differed, then a new event is created. Such as: - Active application and window title - Example: aw-watcher-window - Currently open document/browser tab/playing song - Example: wakatime - Example: aw-watcher-web - Example: aw-watcher-spotify - Is the user active/inactive? Send an event on some interval indicating if the user is active or not. - Example: aw-watcher-afk Inspired by: https://wakatime.com/developers#heartbeats
     *
     * @tags default
     * @name PostHeartbeatResource
     * @summary Heartbeats are useful when implementing watchers that simply keep
     * @request POST:/0/buckets/{bucket_id}/heartbeat
     * @response `200` `void` Success
     */
    postHeartbeatResource: (
      bucketId: string,
      payload: Event,
      query?: {
        /** Largest timewindow allowed between heartbeats for them to merge */
        pulsetime?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/0/buckets/${bucketId}/heartbeat`,
        method: "POST",
        query: query,
        body: payload,
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name GetExportAllResource
     * @summary Exports all buckets and their events to a format consistent across versions
     * @request GET:/0/export
     * @response `200` `Export` Success
     */
    getExportAllResource: (params: RequestParams = {}) =>
      this.request<Export, any>({
        path: `/0/export`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name PostImportAllResource
     * @request POST:/0/import
     * @response `200` `void` Success
     */
    postImportAllResource: (payload: Export, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/0/import`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name GetInfoResource
     * @summary Get server info
     * @request GET:/0/info
     * @response `200` `Info` Success
     */
    getInfoResource: (params: RequestParams = {}) =>
      this.request<Info, any>({
        path: `/0/info`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name GetLogResource
     * @summary Get the server log in json format
     * @request GET:/0/log
     * @response `200` `void` Success
     */
    getLogResource: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/0/log`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags default
     * @name PostQueryResource
     * @request POST:/0/query/
     * @response `200` `void` Success
     */
    postQueryResource: (
      payload: Query,
      query?: {
        /** Name of the query (required if using cache) */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/0/query/`,
        method: "POST",
        query: query,
        body: payload,
        type: ContentType.Json,
        ...params,
      }),
  };
}
