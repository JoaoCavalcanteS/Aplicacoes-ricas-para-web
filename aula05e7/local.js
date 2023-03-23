function mostrarOpcoes (){
    var form = document.getElementById('fconf');
    form.style.display='block';
}


var vcorfundo, vrcorfonte, vrnome;

function inicia(){
    if(localStorage.nome){//se há local storage, faça
        vrnome = document.getElementById('fnome').value;
        localStorage.corfundo = vcorfundo;
        localStorage.cortexto = vrcorfonte;
        localStorage.nome = vrnome;
        defineCor(1,vcorfundo)
        defineCor(2,vcorfundo)
        document.getElementById("painel").innerHTML = "Bem vindo "+ vrnome +"<hr>";
    }
}
window.addEventListener('load', inicia);

function defineCor(op, cor){
        if(op==1){
            document.body.style.background = cor;
            vcorfundo = cor;
        }
        else{
            document.body.style.color = cor;
            vrcorfonte = cor;
        }
}
function gravar(){
    var form = document.getElementById('fconf');
    localStorage.corfundo = vcorfundo;
    localStorage.cortexto = vrcorfonte;
    localStorage.nome = vrnome;

    form.style.display='none';
}
