/**
 * keys
 * Retorna um Array Iterator que contém as chaves para cada
 * elemento do array
 */

const arr = [1,2,3,4];

const arrIterator = arr.keys();

 const a = arrIterator.next();
 const r = arrIterator.next();
 const ra = arrIterator.next();
 const y = arrIterator.next();
 console.log(a);
 console.log(r);
 console.log(ra);
 console.log(y);
 //Resultado: 
 //{ value: 0, done: false }
 //{ value: 1, done: false }
 //{ value: 2, done: false }
 //{ value: 3, done: false }
