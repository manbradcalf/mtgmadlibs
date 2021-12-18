import { Application, send } from "https://deno.land/x/oak@v7.3.0/mod.ts";

const app = new Application();

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}`,
    index: "index.html"
  });
});

await app.listen({ port: 8000 });
