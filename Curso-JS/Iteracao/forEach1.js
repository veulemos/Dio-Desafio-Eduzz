/**
 * forEach
 * Iteração de cada item dentro de um array 
 */
const arr = [1,2,3,4,5];
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});
//Resultado:  
//0: 1
//1: 2
//2: 3
//3: 4
//4: 5
const frutas = ['melancia', 'acerola', 'goiaba', 'laranja'];

frutas.forEach(fruta => {console.log(fruta)});
//Resultado: 
//melancia
//acerola
//goiaba
//laranja

frutas.forEach((fruta, index) => console.log(index, fruta));
//Resultado:
//0 melancia
//1 acerola
//2 goiaba
//3 laranja

frutas.forEach((fruta, index, arra) => console.log(index, fruta, arra));
//Resultado:
//0 melancia [ 'melancia', 'acerola', 'goiaba', 'laranja' ]
//1 acerola [ 'melancia', 'acerola', 'goiaba', 'laranja' ]
//2 goiaba [ 'melancia', 'acerola', 'goiaba', 'laranja' ]
//3 laranja [ 'melancia', 'acerola', 'goiaba', 'laranja' ]