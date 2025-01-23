"use strict";

var alunos = [{
  nome: 'Nayara',
  nota: 7
}, {
  nome: 'Maria',
  nota: 4
}, {
  nome: 'Diego',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Fabio',
  nota: 9
}, {
  nome: 'Fabiola',
  nota: 2
}, {
  nome: 'Anderson',
  nota: 3
}];
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);