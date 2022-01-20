//classe de matemática simples

//forma de descrever o que está testando
const assert = require('assert');
const Math = require('../math.js');//a classe que será criada
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
            assert.equal(value, 10);
            done();
        });
    });
    it('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });
});
//existe os hooks: before, after, afterEach, para limpar os mocks, instanciar componentes, redefinir valores