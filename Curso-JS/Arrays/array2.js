//Criar um array
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

//Criar array com a função Array.of
//cria uma nova instância de array
// a partir do número de parâmetros informados
const arr3 = Array.of(1, 2, 3);

//Criar um array com a função Array
//cria uma nova instância de array
// de acordo com os parâmetros informados
//se tiver apenas um número inteiro (n) isolado
//vai criar um array com n espaços vazios
const arr4 = Array(3);   //[empty x 3]
//para instancias os números do parâmetro,
// é preciso ser mais de um número
const arr5 = Array(3, 2);  //[3, 2]

//Criar um array com a função Array.from
//cria uma nova instância de array a partir de um parâmetro
// array-like (nodelist) ou iterable object (setmap)
const divs = document.querySelectorAll('div');  // Aqui é um nodelist e não foi criado um array. Então não pode usar propriedades do array como pop, push etc
const divArr = Array.from(divs);  // Já aqui, transformou a divs em um array. Aqui poderá usar as propriedades do array
