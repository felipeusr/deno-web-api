import { Router } from "https://deno.land/x/oak/mod.ts";
import { produtos, novoProduto, removerProduto } from "./produtos.ts";

const router = new Router();

router.get("/produtos", (ctx) => {
    ctx.response.body = produtos;
});

router.post("/enviar", async (ctx) => {
    var body = ctx.request.body();
    var req = await body.value;

    var ultimoProduto : any = produtos[produtos.length-1];
    var novoId : number = ultimoProduto.id+1;
    
    novoProduto(novoId, req.nome, req.preco);
});

router.delete("/remover/id=:id", (ctx) => {
    var id = ctx?.params?.id;
    removerProduto(id);
});

export default router;