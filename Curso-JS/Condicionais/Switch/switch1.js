/**
 switch (expressão) {
     case valor1:
         [break;]
     case valueN:
         [break;]
     default:
         [break;]
 }
 */

 const fruit = "pera";

 switch (fruit) {
    case 'banana':
         console.log('R$ 3,00 / kg');
         break;
    case 'mamão':
    case 'pera':
    case 'melancia':
        console.log('R$ 2,00 / kg');
        break;
    default:
        console.log('Produto não encontrado no estoque.');
        break;
 }