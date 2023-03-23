const inputTarefa = document.querySelector('#tarefa');
const btnAddtarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');


function carregaMonitoresDeEventos(){

    document.addEventListener('DOMContentLoaded', recuperaTarefas);

    //EVENTO para adicionar a tarefa
    btnAddtarefa.addEventListener('click', adicioneTarefa);

}
carregaMonitoresDeEventos();

function recuperaTarefas(evento){
   
    //recupera dados do sessionStorage
    let tarefas = sessionStorage.getItem('tarefas');
    
    //verifica se há dados recuperados, se não existir transforma em vetor
    if(tarefas == null){

        tarefas = [];
    }
    tarefas = JSON.parse(tarefas);

    tarefas.forEach(function(tarefa){
        const LI = document.createElement('li');
        LI.className='collection-item';

        LI.addEventListener('drag', () => { 
           
                ev.dataTransfer.setData("text", ev.target.id);
                
            
        })
        LI.appendChild(document.createTextNode(tarefa));
    
        //cria aonde vai ficar o x para apagar a tarefa    
        const A =  document.createElement('a');
        A.className = 'apaga-tarefa secondary-content';
        
        //cria icone com o x para apagar a tarefa
        const I =  document.createElement('i');
        I.className = 'fa fa-remove';
    
        //monta o elemento li para colocar um ul
        A.appendChild(I);
        LI.appendChild(A);
        listaDeTarefas.appendChild(LI);
    })

}



function adicioneTarefa(evento){
    evento.preventDefault();

    if(inputTarefa.value === '' ){
        alert('Entre com uma tarefa');

    }
    else{
    //cria li com a nova tarefa
    const LI = document.createElement('li');
    LI.className='collection-item';
    LI.appendChild(document.createTextNode(inputTarefa.value));


    //cria aonde vai ficar o x para apagar a tarefa    
    const A =  document.createElement('a');
    A.className = 'apaga-tarefa secondary-content';
    
    //cria icone com o x para apagar a tarefa
    const I =  document.createElement('i');
    I.className = 'fa fa-remove';

    //monta o elemento li para colocar um ul
    A.appendChild(I);
    LI.appendChild(A);
    listaDeTarefas.appendChild(LI);
    

    
    gravarTarefa(inputTarefa.value);
    inputTarefa.value = '';
    
    }
}

function gravarTarefa(tarefa){
    let tarefas = [];
    
    //recupera tarefas ja gravadas no sessionStorage
    let tarefaDoStorage = sessionStorage.getItem('tarefas');

    //se sessionStorage já tiver alguma informação
    // faz o parse da string JSON para um objeto JSON
    if(tarefaDoStorage != null){
        
        tarefas = JSON.parse(tarefaDoStorage);
    }
    //adiciona a tarefa ao JSON já existente
    tarefas.push(tarefa);
    //Grava o novo JSON no sessionStorage
    sessionStorage.setItem('tarefas', JSON.stringify(tarefas));
}



function gravarCarrinho(div1){
    let carrinho = [];
    
    //recupera tarefas ja gravadas no sessionStorage
    let carrinhoDoStorage = sessionStorage.getItem('div1');

    //se sessionStorage já tiver alguma informação
    // faz o parse da string JSON para um objeto JSON
    if(carrinhoDoStorage != null){
        
        carrinho = JSON.parse(carrinhoDoStorage);
    }
    //adiciona a tarefa ao JSON já existente
    carrinho.push(div1);
    //Grava o novo JSON no sessionStorage
    sessionStorage.setItem('div1', JSON.stringify(div1));
}

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
    
}
function inicia(){
    var LI = document.getElementsByTagName('li');
    LI = document.getElementById('drag1')
    LI = drag(LI);
LI
}
