function fn() {
    return 'Code here';
}

const arrowfn = () => 'Code here';
const arrowfn2 = () => {
    //Mais de uma expressão
    return 'Code here';
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções. Funções recursivas. Problemas no primeiro arrow (const controlFnExec => fnParam => allowed =>),
//então coloquei para receber o retorno. Função de expressão
const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam(); 
    }
}

//Funções de expressão. assignment expression
const ola = function(){
    console.log('Olá');
}
console.log(ola);

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution(); //Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam();
        }
    }
}