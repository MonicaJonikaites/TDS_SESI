var estoque = ["Lapis", "Caderno", "Caneta", "Borracha", "Apontador"];
estoque.push("Livro");

let nomeCliente = "monica";
let idadeCliente = 16;
let possuiCupom = true;


function processarVenda(valorTotal, cupomAtivo, quantItens){
    valorTotal = valorTotal > 500 || cupomAtivo == true ? valorTotal - (valorTotal * 0.15) : valorTotal;
    return valorTotal * quantItens;
}


if(idadeCliente >= 16){
    console.log(`Venda autorizada para ${nomeCliente}\n`);
} else {
    console.log("Venda bloqueada: idade insuficiente\n");
}


for (let i = 0; i <= 5; i++) {
    console.log(`Despachando item: ${estoque[i]}... OK!`);
}
estoque.shift(0);

console.log(`\nRelatório da Loja: Cliente ${nomeCliente} processou um pedido de R$ ${processarVenda(5000, possuiCupom, 2)}.\nItens restantes no estoque: ${estoque.length}`);