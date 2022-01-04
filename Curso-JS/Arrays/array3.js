//Inserir e remover elementos

//Push
//Adicionar um ou mais elementos
// no final do array e retorna o
// tamanho do novo array
const frutas = ['melancia', 'banana'];
frutas.push('laranja');  // Vai retornar o tamanho do array

const arr = ['banana', 'limão', 'abacate'];
const arrLength = arr.push('acerola');
console.log(arrLength);  // 4
console.log(arr);  //['banana', 'limão', 'abacate', 'acerola'];

//Função pop
//Remove o último item de um array
const arr2 = ['banana', 'limão', 'abacate'];
const removeItem = arr.pop();
// O pop retorna o item removido
console.log(removeItem);    // 'abacate'
console.log(arr2);   // ['banana', 'limão'];

//Unshift
//Adicionar um ou mais elementos no início do
// array e retorna o tamanho do novo array
const arr3 = ['banana', 'melancia', 'abacate'];
const arrLength2 = arr3.unshift('acerola');
console.log(arrLength2);  //4
console.log(arr3);  //['acerola', 'banana', 'melancia', 'abacate'];

//Shift
//Remove o primeiro elemento de um array e retorna o elemento removido
const arr4 = ['banana', 'melancia', 'abacate'];
const removeItem2 = arr4.shift();
console.log(removeItem2);    // 'banana'
console.log(arr4);   // ['banana', 'limão'];

//Concat
//Concatena um ou mais arrays retornando um novo array
const fruits = ['melancia', 'banana'];
const salgados = ['coxinha', 'quibe', 'empada'];
const alimentos = fruits.concat(salgados);  // um merge com um novo array
// o concat não mexe nos outros arrays
console.log(alimentos); //['melancia', 'banana', 'coxinha', 'quibe', 'empada']

//Slice
//Retorna um novo array 'fatiando' o array de acordo com início e fim
const arr5 = [1, 2, 3, 4, 5];
//slice(inicio, fim)
arr5.slice(0,2);  //[1,2]
//se tiver apenas um parâmetro, vai pegar a partir desta posição
arr5.slice(2); //[3,4,5]
//parâmetro únicos negativos, irá pegar a partir da última posição
arr5.slice(-1);  //[5]
arr5.slice(-3);  //[3,4,5]

//Splice
//Altera um array adicionando novos elementos enquanto remove elementos antigos
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(2);  //remove [3,4,5] 
console.log(arr6);  //[1,2]
//Pode adicionar item: splice(a partir da posição, quantos itens serão removidos, o que vou adicionar na posição)
arr6.splice(0, 0, 'first'); //[]
console.log(arr6);  //['first', 1, 2]

const frutti = ['melancia', 'banana'];
frutti.splice(1, 0, 'acerola'); //['melancia','acerola', 'banana']
frutti.splice(2, 1, "laranja", "amora"); //remove "banana" e a partir da posição 2 adiciona os novos itens
