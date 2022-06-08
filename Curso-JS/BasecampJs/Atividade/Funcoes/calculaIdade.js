function calculaIdade(anos) {
    return `Daqui a ${anos} anos,
     ${this.name} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    name: "Maria", 
    idade: 30, 
};

const pessoa2 = {
    name: "Carlos",
    idade: 26,
};

const animal = {
    name: "Fiona",
    idade: 5,
    raca: "Pug",
};

//console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(animal, [7]));