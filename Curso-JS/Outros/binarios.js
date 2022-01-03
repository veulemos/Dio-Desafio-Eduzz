// in : Isso daqui está aqui?
something in somethingItems;
//something está em somethingItems?


//Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "seringueira");
0 in arvores;            //retorna true
3 in arvores;            //retorna true
6 in arvores;            //retorna false. Pois só tem 5 itens no array
"cedro" in arvores;      //retorna false(você deve especificar o número do índice,
                         //não o valor naquele indice)
"cedro" in arvores[2];   //agora retorna true, pois especificou o índice
"length" in arvores;     //retorna true(length é uma propriedade de array)

//Objetos predefinidos
"PI" in Math;            //retorna true
var minhaString = new String("coral");
"length" in minhaString; //retorna true

// Objetos personalizados
var meucarro = {
    marca: "Honda", modelo: "Accord", ano: 1998
};
"marca" in meucarro;     //retorna true
"modelo" in meucarro;    //retorna true


// Instanceof: outro operador binário
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) { //vai retornar true
    //code here
} 