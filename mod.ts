import { Application, Router } from "oak/mod.ts";

const app = new Application();
const router = new Router();

router.put("/video/:id", async ({ params, request, response }) => {
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8080 });
