//Função simples.
function log(value) {
    console.log(value);
}

log('test');

//função anônima. O nome da função é omitida quando atribuida a uma variável
// ou quando é um parametro de uma função.
var log = function(value) {
    console.log(value);
}

log('teste 2');

//função anônima.
var sumOld = function(a, b) {
    return a + b;
}

console.log(sum(5, 5));

//Com o ES6 surgiu o Arrow function. Aqui se tem um return implícito
// se for apenas um expressão: ternários, operadores lógicos, funções
// sendo invocadas e já retornando algo.
var sum = (a, b) => a + b;
console.log(sum(5, 7));

//fazer um statments. Declarar variáveis , utilizar condicionais com  ifs/elses, fazer algo diferente 
// obrigatoriamente deve-se usaar as chaves
var sum2 = (a, b) => {
    return a + b;
}
console.log(sum2(5, 7));
// Se tiver um argumento, pode-se omitir os parênteses
//outro exemplo
var sum3 = a => a;
console.log(sum3(3,15));

//Objetos literais são declarados dessa forma
var objLit = {
    test: '123'
};

// Se fizer um return implicito de um objeto
//obrigatoriamente tem que se colocar os parênteses.
//As chaves definem o corpo de uma função e também os objetos literais.
var createObj = () => ({test: 123});
console.log(createObj());

//função construtora
function Car() {
    this.foo = 'bar';
}
console.log(new Car()); //gerar um objeto com a função construtora.

//Uma função com arrow function não pode fazer o mesmo
//pois não é uma função construtora e por estar usando o this.
//var Car = () => {
    //this.foo = 'bar';
//}
//console.log(new Car());

//Hoisting - chamar (invocar) as funções antes de ser declaradas.
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
//Era comum encontrar situação desse tipo:
//Ele está invocando o próprio objeto por meio do this. 
//As funções tem o contexto de invocação. 
//Elas são executadas no contexto em que elas são invocadas.
//Porém vai ocasionar alguns erros se for: console.log(this);
 var obj = {
     showContext: function showContext() {
         //console.log(this); 
         this.log('test');
     },
     log: function log(value) {
         console.log(value);
     }
 };

 obj.showContext();

 //Porém nem tudo é tão simples assim.
 //Se caso quisesse invocar esse método apos 1 segundo, vai dar erros.
 //Pois,
 var obj = {
    showContext: function showContext() {
        this.log('test');
        //Função do browser setTimeout
        setTimeout(function() {
            this.log('after 1000ms'); //O erro vai dizer que log não é uma função.

        }, 1000);//As funções de setTimeout, callback, request, eventListeners são invocadas num  contexto global.
        //
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

//Como resolver? Com o uso do bind que irá fixar a função independente de onde está.
//Porém, pode-se esquecer de colocar o bind / ou tornar o código muito verboso/ e vai ter alguns erros.
var obj = {
    showContext: function showContext() {
        setTimeout(function() {
            console.log(this);

        }.bind(this), 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

//Outro método era criar um variável para armazenar o contexto.
//Porém poluia o código.
var obj = {
    showContext: function showContext() {
        var _that = this;

        setTimeout(function() {
            _that.log('after 1000ms'); 

        }, 1000);
        //
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

//Veio a arrow function para solucionar isso.
//Arrow Functions tem uma propriedade de contexto léxico. Com isso se tornou mais simples.
//Contudo, não se pode colocar o bind quando se tem o arrow function.
var obj = {
    showContext: function showContext() {
        //this = obj 

        setTimeout(() => {
            this.log('after 1000ms'); 
        }, 1000);
        //
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();