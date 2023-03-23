//Vamos criar uma variável e armazenar um valor nela
var cpf = window.prompt('Seu cpf é  ');
var endereco= window.prompt('Seu endereço é ');
var depedentes = window.prompt('Seu depedentes é ');

//vamos chamar o localstorafe ele vem do window, no caso vamos usar o section

window.localStorage.setItem('cpf',cpf);
window.localStorage.setItem('endereco',endereco);
window.localStorage.setItem('depedentes',depedentes);


//para recuperar o valor em uma key do localstorarge, usamos

// alert(localStorage.getItem('nome'));

document.write("Seu cpf é "+ cpf);
document.write("Seu endereço é "+ endereco);
document.write("Seu depedentes é "+ depedentes);

//utilize o msm procedimento para cpf, endereço e n° depedemtes
