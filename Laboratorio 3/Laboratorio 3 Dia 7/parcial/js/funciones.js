
window.addEventListener("load",addListeners);


var logonURL = "http://localhost:1337/login";
var indexUrl = "index.html";

var emailHC = "sarasas@gmail.com";


function addListeners(){

    var btnLogon = $("btnLogon");

    btnLogon.onclick = executeLogon;


}

function executeLogon(){

    var email = $("txtEmail");
    var password = $("txtPass");

    /*Quitar para usar normalmente*/
    email.value = emailHC;
    password.value = "asdfasd";

    var datosLogin = {email: email.value, password: password.value };
    console.log(datosLogin);

    var xml = new XMLHttpRequest();
    xml.open("POST", logonURL, true);

    /*xml.setRequestHeader('Content-Type','application/json');*/

        xml.onreadystatechange = function(){
            if(xml.readyState === 4 && xml.status === 200){
                var serverResponse = xml.responseText;
                var response = JSON.parse(serverResponse);

                console.log(response);

                if (response.autenticado == "si"){
                    
                    var param = "?color=" + response.preferencias.color + "&" + 
                    "font=" + response.preferencias.font + "&email=" + email.value ;
                    var urlWithPref = indexUrl + param;
                    window.location.replace(urlWithPref);

                    
                }
                
            }
        }

        xml.send(JSON.stringify(datosLogin));

}
function $(id){
    var result = document.getElementById(id);

    return result;
}



