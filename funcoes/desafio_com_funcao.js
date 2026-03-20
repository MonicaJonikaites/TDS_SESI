/*
Atalho comentário de várias linhas:
alt + shift + A 

Desafio:
Criar uma função que receba preço e desconto em %
e mostre o valor final com desconto.
Criar outra função que receba preço e quantidade
e mostre o valor total da compra

*/

function calcularDesconto (preco, desconto,) {
    let desconto2 = preco * (desconto / 100);
    let precoFinal = preco - desconto2
    return precoFinal;
}

function calcularTotal (preco, qtd) {
    let total = preco * qtd;
    return total;
}

let resultado = calcularDesconto(1000, 5);
let resultado2 = calcularTotal(100, 12);

console.log(`Total do pedido: ${resultado2}`);
console.log(`Preco com desconto: ${resultado}`);