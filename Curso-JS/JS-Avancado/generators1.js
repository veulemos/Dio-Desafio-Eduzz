 //Symbol.iterator
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

