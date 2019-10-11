
window.addEventListener("load",addListeners);
window.addEventListener("load",getTableList);

var getTableListDestinationURL = "http://localhost:3000/personas";
var addNewPersonDestinationURL = "http://localhost:3000/nuevaPersona";

function guardar(){
    var addForm = $("addForm");
    addForm.style.visibility = "hidden";

    var table = $("tblResult");
    var txtName = $("txtName");
    var txtLastName = $("txtLastName");
    var txtPhone = $("txtPhone");
    var txtDate = $("txtDate");
    var actionColumn = "<a href=''" +" onclick=" + "'borrar(event)'" + ">Borrar</a>" + " <a href=''" +" onclick=" + "'editar(event)'" + ">Modificar</a>";
 
    

    table.innerHTML += 
    "<tr><td>"+txtName.value+
     "</td><td>"+txtLastName.value+
     "</td><td>"+txtPhone.value+
     "</td><td>"+txtDate.value+
     "</td><td>"+actionColumn+"</td></tr>";

     limpiarForm();
    
}

function getTableList(){

     //JSON.stringify para transformar un objeto JSON a string listo para enviar al servidor
        //JSON.parse para transformar el string de tipo JSON en un objeto json

        //para crear una peticion por ajax

        // http://192.168.2.103:3000/personas

        var table = $("tblResult");
        table.innerHTML = "";

        var xml = new XMLHttpRequest();
        xml.open("GET", getTableListDestinationURL, true);

        xml.onreadystatechange = function(){
            if(xml.readyState === 4 && xml.status === 200){
                var serverResponse = xml.responseText;
                var personList = JSON.parse(serverResponse);

                personList.forEach(element => {

                    var name = element.nombre;
                    var lastName = element.apellido;
                    var phone = element.telefono;
                    var date = element.fecha;

                    insertPerson(name,lastName,phone,date);
                    
                });
            }
        }

        xml.send();
}

function insertPerson(name,lastName,phone,date){

    var table = $("tblResult");
    var actionColumn = "<a href=''" +" onclick=" + "'borrar(event)'" + ">Borrar</a>" + " <a href=''" +" onclick=" + "'editar(event)'" + ">Modificar</a>";

    table.innerHTML += 
    "<tr><td>"+name+
     "</td><td>"+lastName+
     "</td><td>"+phone+
     "</td><td>"+date+
     "</td><td>"+actionColumn+"</td></tr>";
}

function adNewPersonToServer(){

    var xml = new XMLHttpRequest();
    xml.open("POST", addNewPersonDestinationURL, true);
    xml.setRequestHeader('Content-Type','application/json');
        

        var request = buildPersonJson();
        console.log(request);

        xml.onreadystatechange = function(){
            if(xml.readyState === 4 && xml.status === 200){
                var serverResponse = xml.responseText;
                var response = JSON.parse(serverResponse);

                if (response.respuesta == "error"){
                    alert("Datos enviados incorrectos.");
                }else{
                    alert("Persona cargada correctamente en el servidor.");
                    console.log("Cambio en el servidor. Se vuelve a cargar la lista");
                    getTableList();

                }
            }
        }

        xml.send(request);
}


function addListeners(){

    var btnSave = $("btnSave");
    var btnAdd = $("btnAdd");
    var btnCancel = $("btnCancel");
    //btnSave.onclick = guardar;
    btnSave.onclick = adNewPersonToServer;
    btnAdd.onclick = mostrarForm;
    btnCancel.onclick = ocultarForm;

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

function ocultarForm() {

    var addForm = $("addForm");

    console.log(addForm);
    addForm.style.opacity = 1;
    addForm.style.visibility = "hidden";
    
}

function limpiarForm(){

    var txtName = $("txtName");
    var txtLastName = $("txtLastName");
    var txtPhone = $("txtPhone");
    var txtDate = $("txtDate");

    txtName.value = "";
    txtLastName.value = "";
    txtPhone.value = "";
    txtDate.value = "";   
}

function buildPersonJson(){
    
    var txtName = $("txtName");
    var txtLastName = $("txtLastName");
    var txtPhone = $("txtPhone");
    var txtDate = $("txtDate");
    var person = {'nombre':txtName.value,'apellido':txtLastName.value,'fecha':txtDate.value,'telefono':txtPhone.value};
     
    var result = JSON.stringify(person);

    

    return result;

}