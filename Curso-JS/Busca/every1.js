/**
 * every
 * Retorna um booleano verificando se todos os itens de um array satisfazem a condição
 */
const arr = [1, 3, 3, 4, 3];
//Quer saber se todos esses números são pares 
const allEvenNumbers = arr.every(value => value % 2 === 0);
console.log(allEvenNumbers);
//Resultado: false
