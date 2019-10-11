window.addEventListener("load",addListeners);
window.addEventListener("load",cargarPreferencias);
var userEmail = "sarasa";

var newPostUrl = "http://localhost:1337/postearNuevaEntrada";


function addListeners(){
    var btnNewPost = $("btnNewPost");
    btnNewPost.onclick = createNewPost;
}

function $(id){
    var result = document.getElementById(id);

    return result;
}

function createNewPost(){

    var divWriteNewPost = $("writePost");

    var title = crearElemento("h1");
    var titleText = crearNodoTexto("Write New Post");
    title.appendChild(titleText);

    var postTitleLabel = crearElemento("label");
    var postTextLabel = crearNodoTexto("Post Title");
    postTitleLabel.appendChild(postTextLabel);

    var titleInput = crearElemento("input");
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('id','txtTitle');


    var postHeaderLabel = crearElemento("label");
    var postTextHeaderLabel = crearNodoTexto("Post Header");
    postHeaderLabel.appendChild(postTextHeaderLabel);

    var headerInput = crearElemento("input");
    headerInput.setAttribute('type','text');
    headerInput.setAttribute('id','txtHeader');

    var label3 = crearElemento("label");
    var textLabel3 = crearNodoTexto("Post Text");
    label3.appendChild(textLabel3);

    var input3 = crearElemento("input");
    input3.setAttribute('type','text');
    input3.setAttribute('id','txtTexto');


    var btnPost = crearElemento("input");
    btnPost.setAttribute('type','button');
    btnPost.setAttribute('value','Post');
    


    divWriteNewPost.appendChild(title);
    divWriteNewPost.appendChild(postTitleLabel);
    divWriteNewPost.appendChild(titleInput);
    divWriteNewPost.appendChild(postHeaderLabel);
    divWriteNewPost.appendChild(headerInput);
    divWriteNewPost.appendChild(label3);
    divWriteNewPost.appendChild(input3);
    divWriteNewPost.appendChild(btnPost);
    divWriteNewPost.setAttribute('class','contenedor');

    btnPost.setAttribute('onclick','sendDatos()');
    divWriteNewPost.style.visibility = "visible";
}

function sendDatos(){
    
    var txtTitle = $("txtTitle");
    var txtHeader = $("txtHeader");
    var txtTexto = $("txtTexto");
    
    var datosPost = {
        "title": txtTitle.value,
        "header": txtHeader.value,
        "posttext": txtTexto.value,
        "author": userEmail
    }
}

function crearElemento(tipo){
    return document.createElement(tipo);
};

function crearNodoTexto(texto){
    return  document.createTextNode(texto);
}

function cargarPreferencias(){
var userColor = getParameterByName("color");
var userFont = getParameterByName("font");
userEmail = getParameterByName("email");
var cBody = $("cBody");
var divWriteNewPost = $("writePost");

cBody.style.color = userColor;
cBody.style.font = userFont;
divWriteNewPost.style.visibility = "hidden";

}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
