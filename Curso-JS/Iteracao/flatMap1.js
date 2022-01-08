/**
 * flatMap
 * Retorna um novo array assim como a função map
 * e executa um flat de profundidade 1
 */

const arr = [1,2,3,4];
//só pra mostrar a funcionalidade map
const newArr = arr.flatMap(value => [value *2]);
console.log(newArr);
//[ 2, 4, 6, 8 ]

//só pra mostrar a funcionalidade flat
const newArr2 = arr.flatMap(value =>[[value *2]]);
console.log(newArr2);
//[ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]