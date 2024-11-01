import { Hono } from "hono";
import { logger } from "hono/logger";

import { corsConfig } from "./src/middlewares/cors.ts";

import { loginRouter } from "./src/routes/auth/login.ts";
import { hcRouter } from "./src/routes/healthcheck/healthcheck.ts";

// constants
const app = new Hono().basePath("/api/v1");

// middlewares
app.use("*", corsConfig);
app.use(logger());

// routes
app.route("/healthcheck", hcRouter);
app.route("/auth", loginRouter);

Deno.serve({ port: 8998 }, app.fetch);
