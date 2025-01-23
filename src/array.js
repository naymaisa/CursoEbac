const alunos = [
    { nome: 'Nayara', nota: 7 },
    { nome: 'Maria', nota: 4 },
    { nome: 'Diego', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Fabio', nota: 9 },
    { nome: 'Fabiola', nota: 2 },
    { nome: 'Anderson', nota: 3 }
];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);

