// Exemplo de uma função normal.
function soma(a, b) {
    return a + b;
}

//A repetição do primeiro parâmetro.
soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);
soma(2, 6);

//Técnica do Currying

function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

//soma2(2);
//soma2(3);
//soma2(4);
//soma2(5);

for (let index = 2; index <= 5; index++){
    const somatorio = soma2(index);
    console.log(somatorio);
}


