 //O generator se comunica através da interface da iteração
 //Symbol.iterator;
 const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};
//Generators - são funções com pausam, e despausam /retornam valores através da interface de interação do value e done
//Observe uma função simples
//function hello() {
    //console.log('Hello');
    //console.log('from');
    //console.log('function');
//}
//hello();

//Com o generator, se consegue fazer pausas entre os consoles da função hello
// com o uso do asterisco e da palavra reservada yield
//com isso consegue pausar e excutar em partes
function* hello() {
    console.log('Hello');
    yield;
    console.log('from');
    yield;
    console.log('function');
}
const it = hello();
console.log(it.next());//Hello { value: undefined, done: false }
console.log(it.next());//from { value: undefined, done: false }
console.log(it.next());//function { value: undefined, done: true }
//Se quiser retornar um valor a cada iteração basta colocar um número no yield como um argumento
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('from');
    yield 2;
    console.log('function');
}
const it2 = hello();
console.log(it2.next());//Hello { value: 1, done: false }
console.log(it2.next());//from { value: 2, done: false }
console.log(it2.next());//function { value: undefined, done: true }

//Pode receber valores de fora da função
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('from');
    const value = yield 2;
    console.log(value);
}
const it2 = hello();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next('Outside!'));
/**
 Hello
 { value: 1, done: false }
 from
 { value: 2, done: false }
 Outside!
 { value: undefined, done: true }
 */

 //O generator é poderoso porque pode controlar a execução até de um loop infinito
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const it = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
/**
 { value: 0, done: false }
 { value: 1, done: false }
 { value: 2, done: false }
 { value: 3, done: false }
 */
//Pode utilizar o generator para gerar, construir a interface de iteração dos objetos iteráveis
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {//colocar o asterisco
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};
for (let value of obj) {
    console.log(value);
}
/**
 1
 2
 3
 4
 */
//Usar o generator para construir iteradores, sem o uso do next()
