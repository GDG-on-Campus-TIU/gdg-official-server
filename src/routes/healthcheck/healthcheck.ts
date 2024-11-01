import { Context, Hono } from "hono";
import { ApiResponse } from "../../utils/apiResponse.ts";

const hcRouter = new Hono();

hcRouter.get("/", (c: Context) => {
  return c.json(new ApiResponse(200, {ping: "pong"}))
})

export { hcRouter }
