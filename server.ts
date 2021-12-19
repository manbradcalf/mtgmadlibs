import { Application, Router } from "https://deno.land/x/oak@v7.3.0/mod.ts";
import { generateMadlib } from "./ts/app.ts";

const app = new Application();
const router = new Router();

router
  .post("/madlib", async (context) => {
    const result = context.request.body();
    if (result.type == "json") {
      const requestBody = await result.value;
      console.log(`requestBody was ${requestBody}`);
      const madlibGenerated = generateMadlib(requestBody.madlib);
      console.log(`generated Madlib: ${madlibGenerated}`);
      context.response.body = madlibGenerated;
    }
  })
  .get("/", (context) => {
    context.response.body = "Hello from the Router()";
  });

app.use(router.routes());
app.use(router.allowedMethods());

// static content
// https://stackoverflow.com/questions/65480042/how-can-i-serve-static-content-alongside-dynamic-routes-in-a-deno-oak-server
app.use(async (context, next) => {
  const root = `${Deno.cwd()}/public/html`;
  const path = `index.html`;
  try {
    await context.send({ root, path });
  } catch {
    next();
  }
});

await app.listen({ port: 8000 });
