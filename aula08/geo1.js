var lat
var localização
let map;



//declarar uma function que chamada getLocation(obter localização do usuário)
function getLocation(){
    //testar se não existe a localização
    if(!navigator.geolocation)
        return null
    //se ele passar pelo erro, pegamos a localização...
    //utilizando uma função anonima
    navigator.geolocation.getCurrentPosition(function(pos){
        //a seguir vamos selecionar o elemento html com o Id
       lat =  document.getElementById('lat').innerText = pos.coords.latitude;
       lon =  document.getElementById('lon').innerText = pos.coords.longitude;

        initMap();
    })
    
}
function initMap() {
    // The location of Uluru
    const uluru = { lat: lat, lng: lon };
    
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    });
}
getLocation();