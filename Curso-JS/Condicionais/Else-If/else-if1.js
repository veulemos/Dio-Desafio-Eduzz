/**
 if (condition) {
  code here
 } 
 else if (condition) {
  code here
 }
 */

 const array = [2, 3, 4, 5, 6, 8, 10, 15];

 console.log('\nElse if:');
 array.forEach(item => {
     if (item % 2 === 0) {
         console.log(`O número ${item} é divisível por 2.`);
     } else if (item % 3 === 0) {
         console.log(`O número ${item} é divisível por 3.`);
     } else if (item % 5 === 0) {
         console.log(`O número ${item} é divisível por 5`);
     }
 });
 // No caso acima o número 6 é divisível por 2 e 3 ao mesmo tempo e o 15 é por 2, 3 e 5.
 // se for trabalhar com essa particularidade, é melhor usar os if's sozinhos. 

 console.log('\nIf:');
 array.forEach(item => {
     if (item % 2 === 0) {
         console.log(`O número ${item} é divisível por 2.`);
     }
     if (item % 3 === 0) {
         console.log(`O número ${item} é divisível por 3.`);
     }
     if (item % 5 === 0) {
         console.log(`O número ${item} é divisível por 5`);
     }
 });