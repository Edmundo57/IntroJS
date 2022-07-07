// Actividades

// Actividad 1
let nombre = prompt("Nombre: ");
let edad = Number(prompt("Edad: "));

edad >= 18 ? (nombre === "Mario" || nombre === "Carlos" ? alert("Entrada VIP") : alert("Entrada Normal")) : alert("No puedes entrar");  


// Actividad 2
let d1 = Number(prompt("Usuario 1 Piedra(1) Papel(2) Tijera(3)"));
let d2 = Number(prompt("Usuario 2 Piedra(1) Papel(2) Tijera(3)"));

switch(d1){
    case 1:
        d2 === 1 ? alert("Empate") : (d2 === 2 ? alert("Usuario 2 Gana") : (d2 === 3 ? alert("Usuario 1 Gana") : alert("Usuario 1 Gana") ));
        break;
    case 2:
        d2 === 2 ? alert("Empate") : d2 === 3 ? alert("Usuario 2 Gana") : (d2 === 3 ? alert("Usuario 1 Gana") : alert("Usuario 1 Gana") );
        break;
    case 3:
        d2 === 3 ? alert("Empate") : d2 === 1 ? alert("Usuario 2 Gana") : (d2 === 3 ? alert("Usuario 1 Gana") : alert("Usuario 1 Gana") );
        break;
    
    default:
            alert("Dato incorrecto");
}

// Actividad 3
let numero = Number(prompt("Proporcione un numero"));

((numero / 2) - Math.floor((numero / 2))) === 0 ? alert("Numero divisible entre 2") : alert("Numero NO divisible entre 2");

// Actividad 4
let numero = Number(prompt("Proporcione un numero"));

((numero / 2) - Math.floor((numero / 2))) === 0 ? alert("Es par") : alert("Es impar");

// Actividad 5
let numero = Number(prompt("Proporcione un numero"));

numero === 0 ? alert("Ganaste un premio") : alert("Lo siento, sigue participando");

// Actividad 6
let numero1 = Number(prompt("Proporcione un numero 1"));
let numero2 = Number(prompt("Proporcione un numero 2"));

numero1 <= numero2 ?  alert("Numero " + numero1  + " menor") : alert("Numero " + numero2  + " menor")


// Actividad 7
let numero1 = Number(prompt("Proporcione un numero 1"));
let numero2 = Number(prompt("Proporcione un numero 2"));
let numero3 = Number(prompt("Proporcione un numero 3"));
let mayor = Math.max(numero1 ,numero2 ,numero3);


numero1 == numero2 && numero2 == numero3 ? alert("Todos son iguales") :   alert("El numero mayor es: " + mayor);

