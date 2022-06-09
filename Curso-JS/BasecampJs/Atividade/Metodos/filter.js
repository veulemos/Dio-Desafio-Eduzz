function filtraPares(arr) {
    return arr.filter(callback); 
    // poderia colocar a função inteira,
    //ao invés de só colocar o nome como parâmetro
}

//Função que retorna números pares
/*function callback(item) {
    return item % 2 === 0;
}*/

//Função que retorna números ímpares
function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));