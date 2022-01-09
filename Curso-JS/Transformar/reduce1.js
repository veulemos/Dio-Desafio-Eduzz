/**
 * Transformar em outro tipo de dados
 * reduce
 * Retorna um novo tipo de dado iterando cada posição de um array.
 * reduce((total, value) => total += value, 0) O primeiro parâmetro é o vai retornar (total). 
 * Qual o tipo da variável total? Ela começa como inteiro, com o valor 0.
 */

const arr = [1, 2, 3, 4, 5];
//Saber a soma dos valores do array 
const totalNumbers = arr.reduce((total, value) => total += value, 0);
console.log(totalNumbers);
//Resultado: 15

//Calcular a média dos estudantes.
const students = [
    {name: 'John', grade:7},
    {name: 'Marcio', grade:5},
    {name: 'Peter', grade:4}
];
const totalNotas = students.reduce((totalGrades, student) => totalGrades += student.grade, 0);
console.log(totalNotas);
//Resultado: 16

//A média:
const totalmedia = students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length;
console.log(totalmedia);
//Resultado: 5.333333333333333

//Nomes dos alunos: 
const nameStudents = students.reduce((studentName, student) => studentName += student.name + '  ', ' ');
console.log(nameStudents);
//Resultado: John Marcio Peter 