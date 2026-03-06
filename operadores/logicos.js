let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = false;

let resultadoAND = "#AND Voce vai ao shopping? ";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = "#OR Você vai ao Shopping? ";
resultadoOR += temDinheiro || carroEstaNaGaragem;
console.log(resultadoOR)
