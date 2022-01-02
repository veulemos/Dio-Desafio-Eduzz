// Spreed ...
//Para concatenar arrays
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];
//na verdade é isso:
//var musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pés'];

//Se tem uma função com 3 parâmetros
function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args);
//Aqui com a introdução do spreed, o x vai valer 0, o y=1 e z=2
