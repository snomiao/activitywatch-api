# ActivityWatch API

ActivityWatch OpenAPI spec and SDK in typescript.

## Usage

```bash
bun install activitywatch-api
```

2. save this into ./aw-script.ts

```js
import { ActivityWatchAPI } from "./Api";

const api = new ActivityWatchAPI({
  baseUrl: "http://localhost:5600/api",
}).v0

const info = await api.getInfoResource();
console.log(info);

```

## Play with examples

1. git clone this repo
2. `bun install`
3. `code examples/`
4. `bun src/get-info.ts`

## Reference
This project was created using `bun init` in bun v1.1.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
