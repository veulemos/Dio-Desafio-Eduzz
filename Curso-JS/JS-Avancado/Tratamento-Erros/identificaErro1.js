//Ocorrerá um erro de referência
console.log(name);//ReferenceError: Cannot access 'name' before initialization
const name = 'Veronica Lemos';//o const ou let  não tem propriedade hoisting
console.log('Keep going...');//Assim que o erro é estourado, o js interrompe a execução do código seguinte

//Try catch
try {
    console.log(name);
    const name = 'Veronica Lemos';

} catch (err) {
    console.log('Error: ', err);

}

console.log('Keep going...');

//Usando o finally terá o mesmo resultado acima
try {
    console.log(name);
    const name = 'Veronica Lemos';
} catch (err) {
    console.log('Error: ', err);
} finally {
    console.log('Keep going...');
}

//Instanciando o erro e disparando pelo throw, com mensagens customizadas
try {
    const name = 'Veronica Lemos';
    const myError = new Error('Custom message');//Error:  Error: Custom message

    throw myError;

} catch (err) {
    console.log('Error: ', err);
} finally {
    console.log('Keep going...');
}

//Com classe error forma dinâmica

class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}
try {
    const name = 'Veronica Lemos';
    const myError = new CustomError({
        message: 'Custom message on custom error', //Error:  CustomError: Custom message on custom error
        data: { //data: { type: 'Server error' }
            type: 'Server error'
        }
    });//Error:  Error: Custom message

    throw myError;

} catch (err) {
    console.log(err);
    console.log(err.data);
} finally {
    console.log('Keep going...');
}