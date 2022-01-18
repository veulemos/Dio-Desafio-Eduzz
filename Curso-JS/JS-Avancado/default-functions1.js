//Função simples: 
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 5));
//se esquecer um parâmetro, ele retorna um Not a Number, por que o b é undefined
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5));
//com o operador lógico consegue garantir que o valor não seja undefined
function multiply(a, b) {
    b = b || 1;
    return a * b;
}
console.log(multiply(5));

//E se quiser multiplicar por zero?
//continuaria a dar o mesmo resultado, pois no JS o zero é convertido para false e com isso vai pegar o valor 1
function multiply(a, b) {
    b = b || 1;
    return a * b;
}
console.log(multiply(5, 0));

//Para solucionar isso, é preciso pegar o tipo do parâmetro e irá funcionar.
//Porém, é muito verboso.
function multiply(a, b) {
    b = typeof b === 'underfined' ? 1 : b;
    return a * b;
}
console.log(multiply(5, 0));

//Poderia se utilizar de if, porém continua verboso
function multiply(a, b) {
    if (typeof b === 'underfined') {
        b = 1;
    }
    return a * b;
}
console.log(multiply(5));

//Com o ECM6
//Consegue atribuir um valor padrão, tendo um comportamento igual às validações que foram feitas
//Assim o código ficou mais enxuto.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5));

//E isso ocorre com todos os parâmetros.
function multiply(a = 2, b = 1) {
    return a * b;
}
console.log(multiply(undefined, 5));

//Outra caracteristica, é poder referenciar outros parametros.
function multiply(a, b = a) {
    return a * b;
}
console.log(multiply(5));// o primeiro parametro ficou com o valor de 5.
//Porém, o contrário não pode ser feito function multiplay( b = a, a) teria um erro de referencia. 
//Antes de ser referenciada ela deve ser declarada.

//lazy evaluation
function randomNumber () {
    return Math.random() * 10;
}

function multiply (a, b = a) {
    return a * b;
}
console.log(randomNumber());

//Outro forma 
function randomNumber () {
    console.log("Gerando um numero randomeico");
    return Math.random() * 10;
}

function multiply (a, b = randomNumber()) {
    return a * b;
}
console.log(multiply());