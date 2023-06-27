import fastify from "fastify"

const r = fastify()

r.get("/", async () => {
  return {
    hello: "world!",
  }
})

// Run the server!
const start = async () => {
  try {
    await r.listen({ port: 3000 })
  } catch (err) {
    r.log.error(err)
    process.exit(1)
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start()
