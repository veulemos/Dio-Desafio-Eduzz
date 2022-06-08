const alunos = [
    {
        name: 'João', 
        nota: 5, 
        turma: '1B',
    },
    {
        name: 'Sofia', 
        nota: 9,
        turma: '1B',
    },
    {
        name: 'Paulo', 
        nota: 6, 
        turma: '2C',
    },
    {
        name: 'Maria', 
        nota: 4, 
        turma: '2C',
    },
];
function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
        // Com o object destructing reduz o código. 
        const {nota, name} = arr[i];

        if(nota >= media) {
            aprovados.push(name);
        }

        //Este formato é muito verboso
        //if(arr[i].nota >= media) {
            //aprovados.push(arr[i].nome);
        //}
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));