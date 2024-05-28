# ActivityWatch API

ActivityWatch API in typescript

## Usage

```bash
bun install activitywatch-api
```

```js
import { ActivityWatchAPI } from "./Api";

const info = await new ActivityWatchAPI({
  baseUrl: "http://localhost:5600/api",
}).v0.getInfoResource();
console.log(info);

```

This project was created using `bun init` in bun v1.1.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
