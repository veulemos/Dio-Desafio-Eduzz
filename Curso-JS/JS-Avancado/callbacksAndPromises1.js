//callbacks
function doSomething(callback){
    setTimeout(function() {
        //did something
    callback('First data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function() {
        //did something
    callback('Second data');
    }, 1000);
}

//Se quisesse executar as duas funções de modo sequencial
//E fosse fazer um tratamento para cada funcionalidade
//o código ficou mais trabalhoso
function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
    
            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');
                   
                   try {
                    setTimeout(function() {
                        console.log(processedData, processedData2);
                    }, 1000);

                   } catch(err) {
                       //handle error
                   }
                  
                });

            } catch(err) {
                //handle error
            }
           
        });

    } catch(err) {
        //handle error
    }
}
doAll();

//Mas há um modo mais inteligente com o uso de Promise
//const myPromise = new Promise((resolve, reject) => {
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('Second data');
    }, 1000);
});
//console.log(doSomethingPromise); //Promise { <pending> } uma Promise pendente
//Uma promise possui 3 estados:
//Pending - em execução
//Fulfilled - terminou de executar
//Rejected - caso acontença algum erro
//para que consiga executar o console.log da maneira correta, é usado o then
doSomethingPromise.then(data => console.log(data));//First data
//caso aconteça um erro:
//é só fazer esse tratamento, sem precisar de vários try catch
const doSomethingPromise = new Promise((resolve, reject) => {
    throw new Error('Something went wrong');
    setTimeout(function( ){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('Second data');
    }, 1000);
});
doSomethingPromise.then(data => console.log(data)
).catch(error => console.log(error));

//se quiser pegar esses dados e depois invocar uma nova promise
//Promises permitem encadear uma na outra. 
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('Second data');
    }, 1000);
});
doSomethingPromise.then(data => {console.log(data); 
    return doOtherThingPromise;
})
.then(data2 => console.log(data2))
.catch();

//se quiser colocar uma função que gera essa promise e serão executadas no tempo esperado
const doSomethingPromise = () => 
 new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => 
 new Promise((resolve, reject) => {
     throw new Error('Something wrong');
    setTimeout(function( ){
        //did something
        resolve('Second data');
    }, 1000);
});
doSomethingPromise().then(data => {console.log(data); 
    return doOtherThingPromise();
})
.then(data2 => console.log(data2))
.catch(error => console.log('Oops', error));//Qualquer erro que estiver no codigo, o catch vai tratar

//Uma promise onde faz o mesmo do primeiro exemplo callback
//só que de forma mais enxuta, com o código mais curto
const doSomethingPromise = () => 
 new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => 
 new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('Second data');
    }, 1000);
});
doSomethingPromise().then(data => {console.log(data.split('')); 
    return doOtherThingPromise();
})
.then(data2 => console.log(data2.split('')))
.catch(error => console.log('Oops', error));

//Promises consegue executar as funções sequencialmente.
//Se quisesse realizar em paralelo.
const doSomethingPromise = () => 
 new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => 
 new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('Second data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);//[ 'First data', 'Second data' ]
});

//para ter o mesmo comportamento com o de antes com o tratamento de erro
//quando o processamento esta em paralelo
const doSomethingPromise = () => 
 new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => 
 new Promise((resolve, reject) => {
     //throw new Error('Oops'); //vai cancelar a execução das duas, já que está com a promise.all
    setTimeout(function( ){
        //did something
        resolve('Second data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()])
.then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(""));
}).catch(err => {
    console.log(err);
});

//O uso do race. Múltiplas promises e a que resolver primeiro será executada
const doSomethingPromise = () => 
 new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('First data');
    }, 1500);
});

const doOtherThingPromise = () => 
 new Promise((resolve, reject) => {
    setTimeout(function( ){
        //did something
        resolve('Second data');
    }, 1000);
});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);//Second data
});
