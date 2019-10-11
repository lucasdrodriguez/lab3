

    var usuario = "sarasa";
    var contraseña = "12345";
    
    var nombre;
    nombre = "Alexis";
    nombre = 12345;

    if (nombre === "12345") {
        
        // alert("El nombre es 12345");
    } else {
        // alert("No es 12345");
    }

    sumar();

    function sumar(num1,num2) {
        console.log(num1);
        // alert(num1+num2);
    }

    function mostrar() {
        // alert("Se hizo click desde la funcion mostrar!");

        var auxUsuario = document.getElementById("usr").value;
        var auxPass = document.getElementById("pass").value;

        if (auxUsuario == usuario && auxPass ==contraseña) {
            alert("Login Correcto!");
        } else {
            alert("Usuario o contraseña incorrectos!");
        }
    }