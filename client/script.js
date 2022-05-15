const tbody = document.querySelector("#tbody");

window.onload = () => {
  http.get("/produtos").then(produtos => {
    produtos.forEach(produto => {
      tableDOM(produto.id, produto.nome, produto.preco);
    });
  });
}

function enviar() {
  const produtoNome = document.querySelector('#nome').value;
  const produtoPreco = document.querySelector('#preco').value;
  const novoId = document.querySelectorAll('#tbody tr').length+1

  http.post("/enviar", {
    nome: produtoNome,
    preco: produtoPreco
  });

  tableDOM(novoId, produtoNome, produtoPreco);
}

function remover(id) {
  http.delete("/remover/id="+id);
  document.getElementById("item"+id).remove();
}


function tableDOM(id, nome, preco) {
  tbody.innerHTML += `
    <tr id="item${id}">
      <td>${id}</td>
      <td>${nome}</td>
      <td>R$ ${preco}</td>
      <td>
        <button onclick="remover(${id})">Remover</button>
      </td>
    </tr>
  `;
}