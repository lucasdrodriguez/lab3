
window.addEventListener("load",addListeners);

function sumar(){

var numberOne = document.getElementById("txtNumberOne");
var numberTwo = document.getElementById("txtNumberTwo");
var result = document.getElementById("txtResult");

var sumOne = parseInt(numberOne.value);
var sumTwo = parseInt(numberTwo.value);
var resultValue = sumOne + sumTwo;
console.log(resultValue);
result.value =  resultValue;

//Agregar al label de resultado "Ya puede ver el resultado"

}

function sumarYGuardar(){
sumar();

var numberOne = $("txtNumberOne");
var numberTwo = $("txtNumberTwo");
var result = $("txtResult");
var table = $("tblResult");

table.innerHTML += "<tr><td>"+numberOne.value+ "</td><td>"+numberTwo.value+"</td><td>"+result.value+"</td></tr>";

//Agregar al label de resultado "Ya puede ver el resultado y se ha guardado"

}

function addListeners(){

    var btnSumar = document.getElementById("btnSumar");
    var btnSumarYGuardar = document.getElementById("btnSumarYGuardar");

    btnSumar.onclick = sumar;
    btnSumarYGuardar.onclick = sumarYGuardar;

}
function $(id){
    var result = document.getElementById(id);

    return result;
}