//Função simples.
function log(value) {
    console.log(value);
}

log('test');

//função anônima.
var log = function(value) {
    console.log(value);
}

log('teste 2');

//função anônima.
var sumOld = function(a, b) {
    return a + b;
}

console.log(sum(5, 5));

//Com o ES6 surgiu o Arrow function
var sum = (a, b) => a + b;
console.log(sum(5, 7));

//fazer um statments. 
var sum2 = (a, b) => {
    return a + b;
}
console.log(sum2(5, 7));
// Se tiver um argumento, pode-se omitir os parênteses
//outro exemplo
var createObj = () => ({test: 123});
console.log(createObj());

//função construtora
function Car() {
    this.foo = 'bar';
}
console.log(new Car());
//Uma função com arrow function não pode fazer o mesmo
//pois não é uma função construtora e por estar usando o this.
//var Car = () => {
    //this.foo = 'bar';
//}
//console.log(new Car());

//Hoisting - chamar as funções antes de ser declaradas.
log('test3');

function log(value) { 
    console.log(value);
}

// com as arrows functions o hoisting não funciona.
/**
 log ('test3');

 var log = value => {
     console.log(value);
 };
 */