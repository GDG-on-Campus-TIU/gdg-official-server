import { Hono } from "hono";
import { loginRouter } from "./login.ts";
import { registerRouter } from "./register.ts";

const authRouter = new Hono();

authRouter.route("/login", loginRouter)
authRouter.route("/register", registerRouter)

export { authRouter }
