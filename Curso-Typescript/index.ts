interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {
    nome: 'Joao',
    idade: 40
}

/*
export const numero = 2;

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();
interface Estudante {
    nome: string;
    idade: number;
}

interface Estudante {
    serie: string;
}

const estudante: Estudante = {
    //vai juntar os atributos
}*/

/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string; //O cachorro pode ter ou não um parque favorito, então se coloca ?
}

type CachorroSomenteLeitura = {
    readonly [k in keyof Cachorro]-?: Cachorro[k];//os valores somente de leitura
} // o -? remove a condiçao de opcional

class MeuCachorro implements Cachorro {
    idade;
    nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 8;

console.log(cao);

//const meuDog: Cachorro = {
   // nome: 'Apolo',
   // idade: 14,
//}


interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}

//?- é um valor que pode ou não estar definido. Para variáveis opcionais
function redirecione (usuario: IUsuario ) {
    if(usuario.cargo) {
         //redirecionar (usuario.cargo)

    }

    //redireciona para a área do usuario

}
//Condicionais
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione (usuario: IUsuario | IAdmin) {
   
    // if ('cargo' in usuario) {
        //redireciona para a área de administração
   // }

    //redireciona para a área do usuario
}
//Generic types:
function adicionaApendiceALista<T>(array: any[], valor: T ) {
    return array.map(item => item + valor);
}
function adicionaApendiceALista<T>(array: T[], valor: T ) {
    return array.map(() => valor);
}

adicionaApendiceALista(['A', 'B', 'C'], 'd');// vai inferir <string>
adicionaApendiceALista([1, 2, 3], 1);// vai inferir <number>
//adicionaApendiceALista([1, 2, 3], 'd');//espera que seja do mesmo tipo

/*
const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) => {
   //console.log("Digitei!");
    const i = event.currentTarget as HTMLInputElement;
    //console.log(i.value);

});

function soma(a: number, b: number) {
    return a + b;
}*/

//types - define uma estrutura de dados dos parâmetros
//interfaces - contratos para implementar as classes

/*interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
   // executarRugido(alturaEmDecibeis: number): void;
    domestico: boolean
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

/*const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido:(alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
    domestico: false
}

//animal.executarRugido(10);

const felino: IFelino = {
    nome: 'Leão',
    domestico: true,
    tipo: 'terrestre',
    visaoNoturna: true,
    //executarRugido:(alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true
}*/