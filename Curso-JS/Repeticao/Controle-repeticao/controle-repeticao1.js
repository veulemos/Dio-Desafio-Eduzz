//Break
console.log("Exemplo da utilização de break");

var index = 0;

while (true) {
    index++;

    if (index > 2) {
        break;   // Tem a capacidade de parar o laço
    }

    console.log(index);
}

//Continue
console.log('\nExemplo da utilização do continue');

const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) {
        continue;  //Tem a capacidade de pular uma interação
    }
    console.log(element);
}