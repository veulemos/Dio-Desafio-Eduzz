/**
 * values
 * Retorna um Array Iterator que contém os valores para cada
 * elemento do array
 */

 const arr = [1, 2, 3, 4];

 const arrIterator = arr.values();
 
  const a = arrIterator.next();
  const r = arrIterator.next();
  const ra = arrIterator.next();
  const y = arrIterator.next();
  console.log(a);
  console.log(r);
  console.log(ra);
  console.log(y);
  //Resultado: 
  //{ value: 1, done: false }
  //{ value: 2, done: false }
  //{ value: 3, done: false }
  //{ value: 4, done: false }