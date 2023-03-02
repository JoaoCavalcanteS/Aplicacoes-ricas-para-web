var pesoTotal = 0;

function allowDrop(ev){
    ev.preventDefault(); //não deixar o navegador arrastar os objetos

}

//função arrasta, inicia um arrasto de elemento
//Setdata é um método pra escrever um dado
//dataTransfer, funcionalidades, transferencia de daddos
//set é escrever, arrastar
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}  

//drop vai soltar na div
//EV objeto de evento
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    if(ev.target.id ==='div2'){
        // pesoTotal+=parseInt(ev.target.childNodes[0].getAttribute('data-peso'));
        pesoTotal+=parseInt(document.getElementById(data).getAttribute('data-peso'));

    }else if(ev.target.id === 'div1'){
        // pesoTotal-=parseInt(ev.target.childNodes[0].getAttribute('data-peso'));
        pesoTotal-=parseInt(document.getElementById(data).getAttribute('data-peso'));

    };
    
    //exibindo o peso total na pagina
    document.getElementById('pesoTotal').innerHTML = pesoTotal + "kg";
}
//adicionar ou subtrair o peso da imagem



function dragEnd(){
    // if(ev.target.parentNode.id != 'div2'){
    //     pesoTotal -= parseInt(ev.target.getAttribute('data-peso'));
    // }
    // else{
    //     document.getElementById('pesoTotal').innerHTML = pesoTotal + "kg";
    // }
    
}