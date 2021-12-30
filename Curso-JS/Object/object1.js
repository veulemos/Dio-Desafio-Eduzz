let user = {
    name: 'Vanel'
};

//Alterando a propriedade de um objeto
console.log(user);
user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';
console.log(user);
const prop = 'name';
user[prop] = 'Outro nome 3';

//function getProp(prop){
    //return user[prop];
//}
console.log(user);

//Criando uma propriedade 
user.lastName = 'Cristini';
console.log(user);

//Deletando uma propriedade 
delete user.name;
console.log(user);