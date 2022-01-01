const user = ['Veronica', 'Carmem', 'João', 'Larissa'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
     name: 'Veronica',
     age: 26,
     gender: gender.WOMAN
    },
    {
     name: 'Carmem',
     age: 35,
     gender: gender.WOMAN

    },
    {
        name: 'João',
        age: 42,
        gender: gender.MAN
   
    },
    {
        name: 'Larissa',
        age: 50,
        gender: gender.WOMAN
   
       }
];

//Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//Verificar se é uma array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array
// pode pegar também o index e o array corrente
//persons.forEach((person, index, arr)=>{})
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
    //console.log(`Nome:${person.name} index: ${index}`, arr);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas:', totalAge);

//Juntando operações
const totalEvenAges = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);