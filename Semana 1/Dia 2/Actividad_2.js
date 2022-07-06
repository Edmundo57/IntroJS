var edad = 0;
var respuesta = prompt("Proporcione la edad cumplida o por cumplir este año:");

try {
    
    edad = parseInt(respuesta);

    console.log(edad);

    if (edad >= 30) {
        console.log("Felicidades quedaste registrado");
        alert("Felicidades quedaste registrado");
    } else if (edad < 18 ) {
        console.log("Es necesario ser mayor de edad");
        alert("Es necesario ser mayor de edad");
    } else {
        var respuesta2 = prompt("Tienes un embarazo mayor a 9 semanas SI(S) NO(N) ?");
        
        console.log(respuesta2);

        if (respuesta2 === "S" || respuesta2 === "s") {
            console.log("Felicidades quedaste registrado");
            alert("Felicidades quedaste registrado");
        } else {
            var respuesta3 = prompt("Vives en una ciudad fronteriza del norte del pais SI(S) NO(N) ?");
            
            console.log(respuesta3);

            if (respuesta3 === "S" || respuesta3 === "s") {
                console.log("Felicidades quedaste registrado");
                alert("Felicidades quedaste registrado");
            } else {
                console.log("No es posible registrarlo");
                alert("No es posible registrarlo");
            }

        }
        
    }
} catch (error) {
    console.log("Proporcione una edad correcta");
    alert("Proporcione una edad correcta");
}

