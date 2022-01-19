//O fetch e await Dentro do nodejs. O eventEmitter é do node
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('User logged', data => {
    console.log(data);//{ user: 'Veronica Lemos' }
});
emitter.emit('User logged', {user: 'Veronica Lemos'});

//Pode extender essa classe, criando uma classe de usuário
const EventEmitter = require('events');
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}
const users = new Users();
users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Veronica Lemos'});

//Se quiser consumir apenas uma vez, é só usar o método once
const EventEmitter = require('events');
class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}
const users = new Users();

users.once('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Veronica Lemos'});//só vai logar o primeiro
users.userLogged({user: 'Samuel Lemos'});// com o on, loga os dois

//programação assíncrona
const EventEmitter = require('events');
class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
        
    }
}
const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Veronica Lemos'});//só vai logar o primeiro
users.userLogged({user: 'Samuel Lemos'});