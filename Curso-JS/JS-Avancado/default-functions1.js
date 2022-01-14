//Função simples: 
function multiplay(a, b) {
    return a * b;
}
console.log(multiplay(5, 5));
//se esquecer um parâmetro, ele retorna um Not a Number, por que o b é undefined
function multiplay(a, b) {
    return a * b;
}
console.log(multiplay(5));
//com o operador lógico consegue garantir que o valor não seja undefined
function multiplay(a, b) {
    b = b || 1;
    return a * b;
}
console.log(multiplay(5));

//E se quiser multiplicar por zero?
//continuaria a dar o mesmo resultado, pois no JS o zero é convertido para false e com isso vai pegar o valor 1
function multiplay(a, b) {
    b = b || 1;
    return a * b;
}
console.log(multiplay(5, 0));

//Para solucionar isso, é preciso pegar o tipo do parâmetro e irá funcionar.
//Porém, é muito verboso.
function multiplay(a, b) {
    b = typeof b === 'underfined' ? 1 : b;
    return a * b;
}
console.log(multiplay(5, 0));

//Poderia se utilizar de if, porém continua verboso
function multiplay(a, b) {
    if (typeof b === 'underfined') {
        b = 1;
    }
    return a * b;
}
console.log(multiplay(5));

//Com o ECM6
//Consegue atribuir um valor padrão, tendo um comportamento igual às validações que foram feitas
//Assim o código ficou mais enxuto.
function multiplay(a, b = 1) {
    return a * b;
}
console.log(multiplay(5));

//E isso ocorre com todos os parâmetros.
function multiplay(a = 2, b = 1) {
    return a * b;
}
console.log(multiplay(undefined, 5));

//Outra caracteristica, é poder referenciar outros parametros.
function multiplay(a, b = a) {
    return a * b;
}
console.log(multiplay(5));// o primeiro parametro ficou com o valor de 5.
//Porém, o contrário não pode ser feito function multiplay( b = a, a) teria um erro de referencia. 
//Antes de ser referenciada ela deve ser declarada.