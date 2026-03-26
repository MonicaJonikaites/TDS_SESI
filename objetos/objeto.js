const aluno = {
    nome: "Monica",
    idade: 15,
    curso: "Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matriula = "2025A"; // adicionar
aluno.idade = 15; // alterar

delete aluno.curso; // remover

console.log(aluno);