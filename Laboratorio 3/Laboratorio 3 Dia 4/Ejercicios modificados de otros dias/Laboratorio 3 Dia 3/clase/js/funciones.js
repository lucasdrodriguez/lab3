
window.addEventListener("load",addListeners);

function guardar(){

    var table = $("tblResult");
    var txtName = $("txtName");
    var txtLastName = $("txtName");
    var actionColumn = "<a href=''" +" onclick=" + "'borrar(event)'" + ">Borrar</a>";
    var addForm = $("addForm");
    

    table.innerHTML += "<tr><td>"+txtName.value+ "</td><td>"+txtLastName.value+"</td><td>"+actionColumn+"</td></tr>";
    addForm.style.visibility = "hidden";
}


function addListeners(){

    var btnSave = $("btnSave");
    var btnAdd = $("btnAdd");

    btnSave.onclick = guardar;
    btnAdd.onclick = mostrarForm;
   

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

function editar(e){
    e.preventDefault();

    var tagA = e.target;
    var tagTd = tagA.parentNode;
    var tagTr = tagTd.parentNode;
    var tdChilds = tagTr.children;

    console.log(tdChilds);

    tdChilds[0].innerHTML = "New Name";
    tdChilds[1].innerHTML = "New Lastname";

    alert("Se modificaron los datos");


}

function mostrarForm() {

    var addForm = $("addForm");

    console.log(addForm);
    addForm.style.opacity = 1;
    addForm.style.visibility = "visible";
    
}