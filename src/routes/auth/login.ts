import { Hono } from "hono";
import { ApiResponse } from "../../utils/apiResponse.ts";

const loginRouter = new Hono()

loginRouter
  .post("/", c => {
    return c.json(new ApiResponse(200, {
      message: "Sucessfully logged in!!"
    }), 200)
  })

export { loginRouter }
