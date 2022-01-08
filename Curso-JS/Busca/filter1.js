/**
 * filter
 * Retorna um novo array com todos os elementos que satisfazem
 * a condição 
 */

 const arr = [1, 2, 3, 4];

 //retorna os valores maiores do que 2 
 const allValuesGreaterThanTwo = arr.filter(value => value > 2 );
 console.log(allValuesGreaterThanTwo);
 //[ 3, 4 ]