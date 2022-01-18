//Como uma função faria uma operação quando houvesse mais argumentos
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
} 
console.log(sum(5, 5, 5, 2, 3)); //20

//Para facilitar a legibilidade e o encurtamento do código,
// o ecma6 trouxe o rest operator ... 
function sum(...args) {
    console.log(args);
}
console.log(sum(5, 5, 5, 2, 3));//[ 5, 5, 5, 2, 3 ] retorna um array e traz métodos de array
                                //undefined
//Podendo utilizar os métodos de uma array, pode gerar o mesmo comportamento da função acima
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));//20

//No caso da arrow function, não se consegue acessar os arguments.
const sum = () => {
    console.log(arguments);
}
console.log(sum(5, 5, 5, 2, 3));// vai gerar erro de referencia undefined

//trabalhando com arrows functions, também pode utilizar o rest operation
//para manipular a lista de argumentos
const sum = (...rest) => {  
    return rest.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));

//O rest operator pode pegar os argumentos restantes e transformar em um array
const sum = (a, b, ...rest) => {  
    console.log(a, b, rest); //5 5 [ 5, 2, 3 ]
}
console.log(sum(5, 5, 5, 2, 3));

//Outro exemplo com uso do método apply.
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {  
    return multiply.apply(undefined, rest);// se torna verboso

};
console.log(sum(5, 5, 5, 2, 3));

//Para facilitar o código do multiply acima, o ecma6 trouxe o spread operator
//a sua escrita é igual ao rest, porém ele funciona diferente do rest
//o rest pega os parâmetros e transforma em um array.
// Já o spread vai pegar todos os itens do array e transformar em um array para a segunda função,
//assim como fez o apply
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {  
    return multiply(...rest);

};
console.log(sum(5, 5, 5, 2, 3));

//O spread operator pode ser utilizado em strings, arrays e objetos literais e objetos iteráveis
//tem a função de quebrar os itens e passar como parametros para uma outra função
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
    //console.log(arguments); funciona da mesma forma
}
logArgs(...str); //aplicando o spread na string
/**
 * ele quebrou a string em char e jogou para uma lista
 [
  'D', 'i', 'g', 'i', 't',
  'a', 'l', ' ', 'I', 'n',
  'n', 'o', 'v', 'a', 't',
  'i', 'o', 'n', ' ', 'O',
  'n', 'e'
]
 */

//O spread em arrays
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs() {
    console.log(arguments);
    
}
logArgs(...arr);//cada item do array vai virar argumento de uma função [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c); //1 2 3
    
}
logArgs(...arr);

//o spread operator também pode construir array
const arr = [1, 2, 3, 4];

const arr2 = [5, 6, 7].concat(arr);
console.log(arr2);
/**
 [
  5, 6, 7, 1,
  2, 3, 4
]
 */
//sair ordenado
const arr = [1, 2, 3, 4];

const arr2 = arr.concat([5, 6, 7]);

console.log(arr2);
/**
 [
  1, 2, 3, 4,
  5, 6, 7
]
 */
// outra forma de concatenar usando o spread
const arr = [1, 2, 3, 4];

const arr2 = [...arr, 5, 6, 7]; //ao invés de se tornar um array multi dimensional, vai ter o mesmo comportamento

console.log(arr2);
/**
 [
  1, 2, 3, 4,
  5, 6, 7
]
 */
//Pode usar mais de uma vez também
const arr = [1, 2, 3, 4];

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);
/**
 [
  1, 2, 3, 4, 5, 6,
  7, 1, 2, 3, 4, 0,
  0, 0
]
 */
//ou fazer clones simples
const arr = [1, 2, 3, 4];

const arrClone = [...arr];

console.log(arrClone);//[ 1, 2, 3, 4 ]

//O spread com objetos literais é usado só pra construir novos objetos
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2); //{ test: 123, test2: 'hello' }

//A ordem como se faz o spread no objeto é importante pois vai dizer qual vai prevalecer
const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test: 456
};
console.log(obj2);//{ test: 456 }
//agora se inverter
const obj = {
    test: 123
};
const obj2 = {
    test: 456,
    ...obj
};
console.log(obj2);//{ test: 123 }

//Por isso é importante a ordem
const obj = {
    test: 123
};
const obj2 = {
    test: 456,
    ...obj
};
const objMerged = {
    ...obj,
    ...obj2
}
console.log(objMerged);//{ test: 123 }

//Se gerar clone de outro objeto. Por estarem apontando para a mesma referencia
const obj = {
    test: 123
};
const obj2 = obj;
obj2.test = 456;
console.log(obj);//{ test: 456 } irá alterar o valor
//Mas com o uso do spread oparator, faz com que não modifique o objeto original
const obj = {
    test: 123
};
const obj2 = {...obj};//clone shalow
obj2.test = 456;
console.log(obj);//{ test: 123 } não alterou o primeiro objeto
//Deve-se tomar cuidado com os níveis mais baixo de objeto
const obj = {
    test: 123,
    subObjet: {
        test: 123
    }
};
const obj2 = {...obj};//clone shalow
obj2.subObjet.test = 456;
console.log(obj2); //{ test: 123, subObjet: { test: 456 } }
console.log(obj);//{ test: 123, subObjet: { test: 456 } } acabou modificando no original
//Para funcionar, deve-se fazer um spread também no subObjet
const obj = {
    test: 123,
    subObjet: {
        test: 123
    }
};
const obj2 = {...obj, subObjet: {...obj.subObjet}};//clone shalow
obj2.subObjet.test = 456;
console.log(obj2);//{ test: 123, subObjet: { test: 456 } }
console.log(obj);//{ test: 123, subObjet: { test: 123 } } o objeto original continuou intacto