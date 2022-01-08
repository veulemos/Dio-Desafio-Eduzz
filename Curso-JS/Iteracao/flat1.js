/**
 * flat
 * Retorna um novo array com todos os elementos de um sub-array 
 * concatenados de forma recursiva de acordo com a profundidade
 * especificada(depth)
 */
                 //profundidade 1
const arr = [1,2, [3,4]];

//Se estiver vazio, por padrão o parâmetro é 1 de profundidade
const newArr = arr.flat();
console.log(newArr);
//[ 1, 2, 3, 4 ]
console.log(arr);
//[ 1, 2, [ 3, 4 ] ]

const idades = [20,34, [35,60,[70,40]]];

const newArrYears = idades.flat(1);
console.log(newArrYears);
//[ 20, 34, 35, 60, [ 70, 40 ] ]
                           //profundidade 2, pois tem um array dentro de outro array que está em um outro array
const newArryears = idades.flat(2);
console.log(newArryears);
//[ 20, 34, 35, 60, 70, 40 ]

