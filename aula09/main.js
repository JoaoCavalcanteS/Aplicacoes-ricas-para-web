worker1 = new Worker('worker1.js');

function calcularQuadrado(){
    worker1.postMessage(document.getElementById('I-number1').value)
}
worker1.addEventListener('message', function(event){
    
    const quadrado = event.data;
    let resposta = document.getElementById('resultado1').innerText ='O quadrado do número digitado:'+ quadrado;

})

worker2 = new Worker('worker2.js');

function calcularFatorial(){
    worker2.postMessage(document.getElementById('number2').value)
}
worker2.addEventListener('message', function(number){
    
    const fator = number.data;
    console.log(fator);
    let resposta2 = document.getElementById('resultado2').innerText ='O fatorial do número digitado:'+ fator;

})