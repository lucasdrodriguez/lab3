var v;

//En javascript al crear una funcion se crea una variable del mismo nombre que contiene el puntero a esa funcion
function cargar(){

    var boton = document.getElementById("btnSubmit");
    boton.onclick = log;
}

//window.onload = cargar;

//agrega la funcion de la misma forma pero con este metodo se puede referenciar
//mas una funcion para un mismo evento
window.addEventListener("load",cargar);

function log(){

    var a = document.getElementById("txtUsr");

    alert(a.value);
}