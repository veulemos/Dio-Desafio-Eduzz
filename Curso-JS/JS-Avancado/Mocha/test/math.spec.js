//classe de matemática simples

//forma de descrever o que está testando
const assert = require('assert');
const Math = require('../math.js');//a classe que será criada
//A lib chai é uma ferramenta de asserts de modo mais descritiva
const expect = require('chai').expect;
const sinon = require('sinon');
/*describe('Math class', function() {
    it('Sum two numbers', function() {
        const math = new Math();
      //  try {
          //throw new Error('Oh no!');
            assert.equal(math.sum(5,5), 10);
       // } catch(err) {
            //console.log(err);

        //} 

    });
});*/
/*describe('Math class', function() {
    it('Sum two numbers', function() {
        const math = new Math();
      
        math.sum(5,5, (value) => {
            assert.equal(value, 10);// Passou
            //assert.equal(value, 15);// Também passou, mas o erro foi lançado depois

        });

    });
});*/

//Para fazer a validação, o mocha disponibiliza um parâmetro do it, chamado done.
/*describe('Math class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);//agora foi aumentado o tempo do timeout.
      
        math.sum(5,5, (value) => {
            assert.equal(value, 10);
            done();// ele vai finalizar e vai perceber a falha do teste
            //assert.equal(value, 15);

        });

    });
    it.only('Multiply two numbers', function() {
         const math = new Math();

         assert.equal(math.multiply(5, 5), 25);

    });//capacidade de executar apenas um teste
   
});*/
//o mocha não recomenda o arrow function. Por causa do this.
//com o mocha pode escrever testes que ainda não existe.
//se retirar o only vai mostrar o test que passou e o outro que não.
// com o skip, vai passar o teste válido e vai dizer que o outro está pendente.
/*describe('Math class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);//agora foi aumentado o tempo do timeout.
      
        math.sum(5,5, (value) => {
            assert.equal(value, 10);
            done();// ele vai finalizar e vai perceber a falha do teste
            //assert.equal(value, 15);
        });
    });
    it.skip('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });
});*/
/*describe('Math class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);//agora foi aumentado o tempo do timeout.
      
        math.sum(5,5, (value) => {
            assert.equal(value, 10);
            done();// ele vai finalizar e vai perceber a falha do teste
            //assert.equal(value, 15);
        });
    });
    it('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });
});*/

//o mocha nos permite o uso de hooks.
let value = 0;
describe('Math class', function() {
    //hooks
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;
      
        math.sum(value, 5, value => {
            //assert.equal(value, 10);//sem chai
            expect(value).to.equal(10); // com chai
            done();
        });
    });
    it('Multiply two numbers', function() {
        const math = new Math();
        //Para validar objeto:
        const obj = {
            name: 'Veronica Lemos'
        };
        const obj2 = {
            name: 'Veronica Lemos'
        };
       // expect(obj).to.have.property('name');//Funcionou! Se coloca uma propriedade que não existe, dará erro
       //Pode verificar os valores:
        //expect(obj).to.have.property('name').equal('Veronica Lemos');//Se for diferente, ele dispara o erro
        //Pode comparar objetos:
        //expect(obj).to.equal(obj2);//Vai gerar um erro. No JS, ele compara as referências e não os valores
        //Mas se colocar o obj2 referenciando o obj, irá funcionar: obj2 = obj;
        //Porém, para resolver esse problema de referencia, deve-se fazer a comparação profunda, o deep
        expect(obj).to.deep.equal(obj2);// com isso se tem o comportamento desejado.

        //assert.equal(math.multiply(value, 5), 0);// sem chai
        //expect(math.multiply(value, 5)).to.equal(0);// com chai
    });
    it.only('Calls res with sum and index values', function() {
        const req = {};
        const res = {
           // load: sinon.spy()
           load: function load() {
               console.log('called!');
           }
        };
        //sinon.spy(res, 'load');// metodo espião
        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

       // expect(res.load.calledOnce).to.be.true;
       // expect(res.load.args[0][0]).to.equal('index');
        expect(res.load.args[0][1]).to.equal(10);//soma dos dois valores
    });
});
//existe os hooks: before, after, afterEach, para limpar os mocks, instanciar componentes, redefinir valores
//O assert não é tão descritivo, então, é preciso usar o chai para isso. O chai é uma biblioteca.
