let n1 = 6.0;
let n2 = 8.0;
let media = 7.5;

media = (n1 + n2) /2;

if (media >= 7.0) {
    console.log("Aprovado!");
} else if (media < 7.0 && media < 5.0) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}