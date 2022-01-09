/**
 * sort
 * Ordena os elementos de um array de acordo com a condição
 */
 const students = [
    {name: 'John', grade:7},
    {name: 'Marcio', grade:5},
    {name: 'Peter', grade:4}
];
//ordenar o array por notas, do menor para o maior(crescente)
const OrdenaEstudantes = students.sort((current, next) => current.grade - next.grade);
console.log(OrdenaEstudantes);
//Resultado: 
/**
 [
   { name: 'Peter', grade: 4 },
   { name: 'Marcio', grade: 5 },
   { name: 'John', grade: 7 }
 ]
 */

 //ordem decrescente
 const OrdenaEstudantesDecrescent = students.sort((current, next) => next.grade - current.grade);
 console.log(OrdenaEstudantesDecrescent);
//Resultado: 
/**
 [
   { name: 'John', grade: 7 },
   { name: 'Marcio', grade: 5 },
   { name: 'Peter', grade: 4 }
 ]
 */