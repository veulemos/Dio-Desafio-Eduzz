//Solucao 1
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//console.log(verificaPalindromo("ovo"));
//console.log(verificaPalindromo("gato"));
//console.log(verificaPalindromo(""));

let myVar=null;
//console.log(verificaPalindromo(myVar));

//Solução 2
// O indice começa contagem no 0 e o lenght começa no 1

function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]) {
            return false;
        } 
    }

    return true;

}

//console.log(verificaPalindromo2("abba"));
console.log(verificaPalindromo2("gato"));