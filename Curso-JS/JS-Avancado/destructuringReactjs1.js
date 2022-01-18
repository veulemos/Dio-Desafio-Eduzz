var arr = ['Apple', 'Banana', 'Orange'];
//é muito verboso
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//Com Destructuring Assigment
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];
//a escrita fica muito mais enxuta
console.log(apple);//Apple
console.log(apple2);//Apple

//Caso tenha um array dentro do primeiro
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
//o último array tem que existir senão vai dar erro
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(tomato);//Tomato
console.log(tomato2);//Tomato
//caso seja a inexistência de um item, vai ser undefined
var [apple2, banana2, orange2] = ['Apple', 'Banana'];
console.log(orange2);//undefined

//O destructuring destroi o array e pode ser usado de outra forma em objetos
//objeto normal
var obj = {
    name: 'Veronica'
};
var nome = obj.name;
console.log(nome);//Veronica
//com o destructuring
var obj = {
    name: 'Veronica'
};
var {nome} = obj;
console.log(nome);

//se quiser atribuir o nome da variável é diferente do array
var arr = ['Apple', 'Orange'];
var obj = {
    name: 'Veronica'
};
//Destructuring Assigment
var [apple2] = arr;
var {nome: nome2} = obj;
nome2 = 'Rita';
console.log(nome2);//Rita
console.log(obj);//{ name: 'Veronica' }

//outro exemplo.Na forma antiga de fazer:
var obj = {
    name: 'Veronica',
    props: {
        age: 36
    }
};
var age = obj.props.age;
console.log(age);

//Com Destructuring Assigment
//var {props: {age}} = obj;
// pode também atribuir um nome diferente
var {props: {age: age2}} = obj;
console.log(age2);

//Pode-se fazer destructuring de array dentro de objeto e vice-versa
var obj = {
    name: 'Veronica',
    props: {
        age: 36,
        favoriteColors: ['black', 'green', 'blue'] 
    }
};
var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];

//Com Destructuring Assigment
//var {props: {age}} = obj;
// pode também atribuir um nome diferente
var {props: {age: age2, favoriteColors: [color1, color2, color3]}} = obj;
console.log(color1);//black

//o contrario, no caso array de objeto
var arr = [{name: 'Apple', type:'fruit'}];
var fruit1 = arr[0].name;

//Com Destructuring Assigment
var[{name}] = arr;
console.log(name);
//se quiser atribuir o nome da variável diferente
var[{name: fruitName}] = arr;
console.log(fruitName);

//Os lugares onde pode utilizar o destructing:
//na hora de definir as variáveis
var[{name: fruitName}] = arr;
let[{name: fruitName}] = arr;
const[{name: fruitName}] = arr;
//como também em uma lista de argumentos de uma função
function sum(arr) {
    return arr[0] + arr[1];
}
console.log(sum([5, 5]));//10

//Pode-se fazer na definição das variáveis dos argumentos também
function sum([a, b]) {
    return a + b;
}
console.log(sum([5, 5]));//10

//destructuring + default values
function sum([a, b] = [0, 0]) {//[0, 0] é o valor default 
    return a + b;
}
//console.log(sum());//0
//passando parametros, ele não vai pegar o valor default
console.log(sum([6, 6]));//12

//o mesmo acontece com os objetos
function sum({a, b}) {
    return a + b;
}
console.log(sum({a: 5, b: 5}));//10