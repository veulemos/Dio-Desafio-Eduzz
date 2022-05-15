let numberOne;// com o let precisa declarar antes.
numberOne = 1; //Atribuição e não declaração
//console.log(numberOne + 2);

var firstName = 'João';
var lastName = 'Souza'; // valor global.

if(firstName === 'João'){
     
    var firstName = 'Pedro';
    let lastName = 'Silva';
    lastName = 'Rodrigues';//Não pode redeclarar, mas pode reatribuir

    console.log(lastName); //Rodrigues.
}

console.log(firstName, lastName); //Pedro Souza.

//Prefira usar mais o let do que o var.
