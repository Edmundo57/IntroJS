
// Actividad 2
let numero = Number(prompt("Proporcione un numero:"));
let i = 1;

console.log("Numero mutiplos de 5")

while ( i <= numero){

    ((i / 5) - Math.floor((i / 5))) === 0 ? console.log(i) : null;

    i++;
}

























// Actividad 3
let numero = Number(prompt("Proporcione un numero:"));
let i = 1;

console.log("Numeros multiplos de 5")
do{

    ((i / 5) - Math.floor((i / 5))) === 0 ? console.log(i) : null ;

    i++;
} while ( i <= numero)














// Actividad 4
console.log("Numero impares")

for (let i = 1; i <= 50; i++) {
    ((i / 2) - Math.floor((i / 2))) !== 0 ? console.log(i) : null ;
}




















// Actividad 5
let numero = Number(prompt("Proporcione un numero del 1 al 100:"));

for (let i = 1; i <= 100; i++) {
    i >= numero && i <= numero + 9 ? null : console.log(i) ;
}

