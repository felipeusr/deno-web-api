export var produtos : Array<any> = [
    {"id":1, "nome":"Bike", "preco":799},
    {"id":2, "nome":"Barbie", "preco":49},
    {"id":3, "nome":"Ps5", "preco":6999}
];

export function novoProduto(id:number, nome:string, preco:number) {
    var novoProduto : object = {"id":id, "nome":nome, "preco":preco};
    produtos.push(novoProduto);
}

export function removerProduto(id : any) {
    produtos = produtos.filter(produtos => produtos.id != id);
}