//Symbols - gerar um identificador único
//e a forma de gerar é invocando como se invoca uma função
const uniqueId = Symbol();
console.log(uniqueId);

//Não pode ser invocado com o operador new
//Nunca é igual ao outro, é um identificador único e não pode ser adivinhado nem descrito

//Pode passar um valor no Symbol, apenas para debuggin e não está ligado ao seu valor de verdade
const uniqueId = Symbol('hello');
const uniqueId2 = Symbol('hello');
console.log(uniqueId === uniqueId2);//false

//Symbol pode ser utilizado pra gerar propriedades privadas, é uma forma de dizer que pra ser acessada deve ser intensionalmente
const uniqueId = Symbol('hello');//só pode acessar o obj quem tiver o symbol hello

const obj = {
    [uniqueId]: 'hello'
};
console.log(obj);//{ [Symbol(hello)]: 'hello' }

//Symbols tem propriedades chamadas de Well known symbols: 
Symbol.iterator
Symbol.split
Symbol.toStringTag
//esses tipos servem para adicionar propriedades, metaprorpiedades ou só objetos
const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

//console.log(it);//Object [Array Iterator] {}
console.log(it.next());//{ value: 1, done: false }
console.log(it.next());//{ value: 2, done: false }
console.log(it.next());//{ value: 3, done: false }
console.log(it.next());//{ value: 4, done: false }
console.log(it.next());//{ value: undefined, done: true }

//percorrendo o array
const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

while(true) {
    let {value, done} = it.next();
    if (done) {
        break;
    }
    console.log(value);
}
/**
 1
 2
 3
 4
 */

 //Com o ecma6 facilita esse percorrer acima com o for of
 const arr = [1, 2, 3, 4];

 for(let value of arr) {
     console.log(value);
 }
 /**
 1
 2
 3
 4
  */
 //Esses tipos de estrutura de dados que possuem o iterator
 //se consegue utilizar o for of e o spread nele. E nos objetos se utiliza  os Well known symbols
 
 //Symbol.iterator
 const obj = {
     values: [1, 2, 3, 4],
     [Symbol.iterator]() {
         let i = 0;
         return {
             next: () => {
                 i++;
                 return {
                     value: this.values[i - 1],
                     done: i > this.values.length
                 };
             }
         };
     }
 };
 //const it = obj[Symbol.iterator]();
 //console.log(it.next());//{ value: 1, done: false }
 //Agora o objeto é iteravel e com isso pode-se utilizar o for of 
//for (let value of obj) {
   // console.log(value);
//}
/**
 1
 2
 3
 4
 */
//ou o spread
const arr2 = [...obj];
console.log(arr2);//[ 1, 2, 3, 4 ]