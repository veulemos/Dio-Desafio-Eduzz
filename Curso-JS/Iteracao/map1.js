/**
 * map
 * Retorna um novo array, de mesmo tamanho, iterando cada item de um array
 */

const arr = [1,2,3,4,5];

const newArr = arr.map(value => value * 2);
console.log(newArr);
//[2,4,6,8,10]
//não modificou o array inicial 
console.log(arr);

const frutas = ['melancia', 'acerola', 'goiaba', 'laranja'];
//vai mostrar um novo array com a concatenação
frutas.map((fruta, index)=> console.log(`${index} - ${fruta}`));