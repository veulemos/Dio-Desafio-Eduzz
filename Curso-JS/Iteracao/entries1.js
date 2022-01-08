/**
 * entries
 * Retorna um Array Iterator que contém os pares chave/valor para cada
 * elemento do array
 */

 const arr = [1, 2, 3, 4];

 const arrIterator = arr.entries();
 
  const a = arrIterator.next();
  const r = arrIterator.next();
  const ra = arrIterator.next();
  const y = arrIterator.next();
  console.log(a);
  console.log(r);
  console.log(ra);
  console.log(y);
  //Resultado
  //{ value: [ 0, 1 ], done: false }
  //{ value: [ 1, 2 ], done: false }
  //{ value: [ 2, 3 ], done: false }
  //{ value: [ 3, 4 ], done: false }