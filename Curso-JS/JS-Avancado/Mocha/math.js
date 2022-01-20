/*class Math {
    sum = function sum(a, b) {
        return a + b;

    }
}
module.exports = Math;*/

//Depois que passou no primeiro teste, 
//agora com o TDD, será necessário refatorar o código
//e garantir que passa no teste.
/*class Math {
    sum(a, b) {
        return a + b;

    }
}
module.exports = Math;*/
//E se a função fosse assincrona. Com uso do callback no parametro.
class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b); 

        }, 2500); //o limite do timeout no mocha é de 2000
    }
    multiply(a, b) {
        return a * b;
    }
}
module.exports = Math;