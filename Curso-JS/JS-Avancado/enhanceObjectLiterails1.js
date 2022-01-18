//Uma forma clássica de objetos literais 
var obj = {
    prop1: 'Digital Innovation One'
};
console.log(obj);

//Uma outra forma de atribuir valores para propriedades e métodos
//poderia ser referenciando uma variável
var prop1 = 'Digital Innovation One';
var obj = {
    prop1: prop1
};
console.log(obj);
//Porém repete a mesma nomeclatura 

//Com o Ecma6 tem o shorthands que pode omitir o lado direito
var prop1 = 'Digital Innovation One';
var obj = {
    prop1
};
console.log(obj);

//Isso serve também para função (métodos)
function method1() {
    console.log('method called');
}

var obj = {
    method1
};

obj.method1();

//Uma outra forma de fazer métodos
var obj = {
    sum: function sum(a, b) { //pode ser uma função anônima também  sum: function(a, b)
        return a + b;
    }
};

console.log(obj.sum(1, 5));

//O ecma6 tem uma outra forma de encurtar os objetos literais
//omitindo a palavra function
var obj = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1, 6)); //7
console.log(obj); //{ sum: [Function: sum] }

//Outra forma era primeiro criar uma propriedade, atribuir essa propriedade ao objeto, atribuindo um valor
var propName = 'test';

var obj = {};

obj[propName] = 'prop value'; // dentro dos colchetes pode ser feita uma concatenação, qualquer tipo de operação, ou função etc: obj[propName + 'concat] = 'prop value';

console.log(obj); //{ test: 'prop value' }

//com o ecma6 pode-se fazer diretamente, encurtando o código, centralizando e trazendo legibilidade do código
var propName = 'test';
var obj = {
    [propName + 'concat']: 'prop value'
};
console.log(obj); //{ testconcat: 'prop value' }