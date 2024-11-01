import { Hono } from "hono";

const loginRouter = new Hono()

loginRouter
  .post("/login", c => {
    return c.json({
      status: 200,
      message: "Login route"
    })
  })

export { loginRouter }
