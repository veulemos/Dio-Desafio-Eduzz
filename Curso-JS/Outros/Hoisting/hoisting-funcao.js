function fn() {
    log('Hoisting de função');//Aqui ela vai ser retornanda , mesmo sendo colocada antes

    function log(value) {
        console.log(value);
    }
}

fn();

/**
 * Boa prática:
 function fn() {
     function log(value) {
         console.log(value);
     }

     log('Hoisting de função);
 }
 */