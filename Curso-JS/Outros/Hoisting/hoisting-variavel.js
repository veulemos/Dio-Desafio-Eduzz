/**
 * O hoisting da variável só eleva a criação da variável e não a sua atribuição
 * Já a função ela é içada (elevada) como um todo. Vai ter até a assinatura dela lá.
 */

//Hoisting- variáveis:

function fn(){
    console.log(text); // retorna indefined

    var text = 'Exemplo';

    console.log(text); //retorna o valor da variável
}

fn();

/**
 * Hoisting em ação:
 function fn() {
     var text;
     console.log(text);

     text = 'Exemplo';
     console.log(text);
 }
 */