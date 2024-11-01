import { Hono } from "hono";
import { logger } from "hono/logger";

import { corsConfig } from "./src/middlewares/cors.ts";

import { hcRouter } from "./src/routes/healthcheck/healthcheck.ts";
import { authRouter } from "./src/routes/auth/index.ts";

// constants
const app = new Hono().basePath("/api/v1");

// middlewares
app.use("*", corsConfig);
app.use(logger());

// routes
app.route("/healthcheck", hcRouter);
app.route("/auth", authRouter);

Deno.serve({ port: 8998 }, app.fetch);
