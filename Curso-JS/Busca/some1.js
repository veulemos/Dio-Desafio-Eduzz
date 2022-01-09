/**
 * some
 * Retornoa um booleano verificando se pelo menos um item de um array satisfaz a condição
 */
const arr = [1, 3, 3, 4, 3];

const hasSomeEvenNumbers = arr.some(value => value % 2 === 0);
console.log(hasSomeEvenNumbers);
//Resultado
//true

const students = [
    {name: 'John', grade:7},
    {name: 'Marcio', grade:5},
    {name: 'Peter', grade:4}
];
//Saber se tem aluno(s) com média maior ou igual a 7 
const hasAprovado = students.some(student => student.grade >= 7);
console.log(hasAprovado);
//Resultado: true

//Saber quem foi/foram o(s) aprovado(s)
const whoAprovado = students.find(student => student.grade >= 7);
console.log(whoAprovado);
//Resultado: { name: 'John', grade: 7 }

//Saber o índex desse aluno 
const indexAprovado = students.findIndex(student => student.grade >= 7);
console.log(indexAprovado);
//Resultado: 0 

//Todos os alunos passaram?
const allStudentsAprovados = students.every(student => student.grade >= 7);
console.log(allStudentsAprovados);
//Resultado: false

//O primeiro estudante com a menor nota 
const firstEstudanteMenorNota = students.find(student => student.grade < 7);
console.log(firstEstudanteMenorNota);
//Resultado: { name: 'Marcio', grade: 5 }