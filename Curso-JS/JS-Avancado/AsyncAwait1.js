//ES7 Async Await - uma forma de criar promises mais simples e enxuta
const simpleFunc = async () => {
    return 12345;
}
console.log(simpleFunc());//Promise { 12345 } 
//com o async, transforma a função como uma promise.

const simpleFunc = async () => {
    return 12345;
};
simpleFunc().then(data => {
    console.log(data);//12345
});

//da mesma forma da promise, consegue tratar o erro
const simpleFunc = async () => {
    throw new Error('Oh no!');
    return 12345;
};
simpleFunc().then(data => {
    console.log(data);//12345
}).catch(err => {
    console.log(err);
});

//Async não é utilizada sozinho. Await - espera que outras promises sejam resolvidas
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();//aguardou a resolução da função asyncTimer.
    
    return data;
};
simpleFunc().then(data => {
    console.log(data);//12345
}).catch(err => {
    console.log(err);
});
//Lidar com os aspectos assincronos de forma sequencial
const fetch = required('node-fetch');

function asyncTimer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });
}
//O await espera uma promise resolver
const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resStream => resStream.json());
    return dataJSON;
};
simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Se for para processar de forma paralela usa-se o promise.all

function asyncTimer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });
}
//O await espera uma promise resolver
const simpleFunc = async () => {
    const data = await Promise.all ([asyncTimer(), fetch('/data.json').then(resStream => resStream.json())]);
    return data;
};
simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});