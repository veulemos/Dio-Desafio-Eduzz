(() => {
    this.name = 'arrow function';

    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome do objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();
