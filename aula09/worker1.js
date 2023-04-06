addEventListener('message', function(event){
    const inputNumber1 = event.data;//extrai os dados que estão dentro deste evento
    const quadrado = inputNumber1 ** 2;
    postMessage(quadrado);

})
