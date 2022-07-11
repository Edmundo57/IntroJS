let respuesta = 0;
let numero1 = 0;
let numero2 = 0;
let calculo = 0;

do {

    numero1 = Math.floor(Math.random() * 9) + 1;
    numero2 = Math.floor(Math.random() * 899) + 100;
    console.log(numero1);
    console.log(numero2);

    calculo = numero1 * numero2;
    console.log(calculo);

    respuesta = Number(prompt("Resultado de multiplicar " + numero1 + " por " + numero2));

    console.log(respuesta);

// // } while (false)
} while ( calculo !== respuesta)