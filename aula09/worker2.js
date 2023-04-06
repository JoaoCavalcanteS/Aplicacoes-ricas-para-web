addEventListener('message', function(number){
    let inputNumber = number.data;
    if(inputNumber>0){
        let soma = inputNumber;
  
        for(let i=1; i<=inputNumber; i++){
            soma = soma * i;
        }
        postMessage(soma);
    }

})
