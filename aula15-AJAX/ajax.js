window.onload = function(){
    var url ="http://api.openweathermap.org/data/2.5/weather?";
    var myAPI = "d23bb76e94e8acd23904f0da2978def0";
    var resultado;
    var cidade;
    // var cidades = document.getElementById('cidades').value;


    cidades.onchange = function(){
        var ajax = null;

        if(window.XMLHttpRequest){
            ajax = new XMLHttpRequest();
        }
        else{
            if(window.ActiveXObject){
                ajax = new ActiveXObject("Msxml2.XMLHTTP");
            }
        } 
        cidade = cidades.value;

        if(cidade!=0){
            ajax.open("GET",url+'appid='+myAPI+'&q='+cidade+'&units=metric&lang=pt',true);

            ajax.send(null);

            //tenta identificar o estado do carregamento do conteúdo
            ajax.onreadystatechange = function(){
                //verifica se o conteudo ja chegou no navegador
                if(ajax.readyState ==4){
                    if(ajax.status ==200){
                        //verifica se o conteudo ja chegou na página
                        console.log(ajax.responseText);

                        resultado = JSON.parse(ajax.responseText);

                        let nome = document.getElementById('cidade');
                        let min = document.getElementById('min');
                        let max = document.getElementById('max');
                        let desc = document.getElementById('desc');

                        nome.innerText = resultado.name;
                        min.innerText = resultado.main.temp_min;
                        max.innerText = resultado.main.temp_max;
                        desc.innerText = resultado.weather[0].description;
                        //     console.log(resultado);
                        //     console.log(resultado.name);
                        //     console.log(resultado.main.temp_min);
                        //     console.log(resultado.main.temp_max);
                        //     console.log(resultado.weather[0].description);
                    }
                }
            }
        }
    }
};