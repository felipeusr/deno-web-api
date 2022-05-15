import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./routes.ts";

const app = new Application();

const PORT : number = 3001;

app.use(oakCors());
app.use(router.routes());

await app.listen({ port: PORT });