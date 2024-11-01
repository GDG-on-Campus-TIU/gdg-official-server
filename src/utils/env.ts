import "jsr:@std/dotenv/load";

export const getEnv = (variable: string) => {
  const envVar = Deno.env.get(variable)
  return envVar ?? undefined
}
