import { cors } from "hono/cors"
import { getEnv } from "../utils/env.ts";

export const corsConfig = cors({
  origin: getEnv("CORS_ORIGIN") ?? "http://localhost:8998",
  allowMethods: ["GET", "POST", "OPTIONS", "PUT"],
  credentials: true
})
