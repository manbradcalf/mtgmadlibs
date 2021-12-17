import { Application, send } from "https://deno.land/x/oak@v7.3.0/mod.ts";
import { madlib } from "./madlib.mjs";

const app = new Application();

madlib()

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}`,
    index: "index.html",
  });
});

await app.listen({ port: 8000 });
