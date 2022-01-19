//para fazer requisições: fetch
//A fetch utiliza promises
//chamada no localhost ou no servidor
import fetch from "node-fetch";
fetch('http://localhost:8080/data.json').then(responseStream => responseStream.json())
.then(data => {
        console.log(data);
}).catch(err => {//se tiver um erro de rede, ele será pego no catch
    console.log('Erro', err);

});

//Para observar o status
fetch('http://localhost:8080/data.json')
.then(responseStream => {
    if(responseStream.status === 200) {
        return responseStream.json();
    } else {
        throw new Error('Request error');
    }
   })
.then(data => {
        console.log(data);
})
.catch(err => {//se tiver um erro de rede, ele será pego no catch
    console.log('Erro', err);

});

//Algo diferente de GET
fetch('http://localhost:8080/data.json', {
    method: 'post',
    body: JSON.stringifly
})
.then(responseStream => {
    if(responseStream.status === 200) {
        return responseStream.json();
    } else {
        throw new Error('Request error');
    }
   })
.then(data => {
        console.log(data);
})
.catch(err => {//se tiver um erro de rede, ele será pego no catch
    console.log('Erro', err);

});
//O fetch sem o segundo parametro, por default é um GET
  