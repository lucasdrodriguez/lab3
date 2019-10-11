
window.addEventListener("load",addListeners);

function guardar(){

    var table = $("tblResult");
    var txtName = $("txtName");
    var txtLastName = $("txtName");
    var actionColumn = "<a href=''" +" onclick=" + "'borrar(event)'" + ">Borrar</a>";
    

    table.innerHTML += "<tr><td>"+txtName.value+ "</td><td>"+txtLastName.value+"</td><td>"+actionColumn+"</td></tr>";
}


function addListeners(){

    var btnSave = $("btnSave");

    btnSave.onclick = guardar;
   

}
function $(id){
    var result = document.getElementById(id);

    return result;
}

function borrar(e){
    e.preventDefault();
    //Trae el componente que disparo este evento
    var tagA = e.target;
    var tagTd = tagA.parentNode;
    var row = tagTd.parentNode;
    

    row.innerHTML = "";
    alert("Se borro una persona");
}