// // ## Problema 1:
// // Cuadre el valor de cada elemento en el array. Suponga que solo obtendrá números en la array de entrada.
// // `const input = [ 1, 2, 3, 4, 5 ];`
// // Resultado esperado:
// // `[ 1, 4, 9, 16, 25]`

const input = [ 1, 2, 3, 4, 5 ];
const ouput = input.map(elemento => elemento * elemento);
console.log(ouput);




// // ## Problema 2:
// // Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.
// // `const input = [12, 46, 32, 64];`
// // Resultado esperado:
// //   `{ mean: 38.5, median: 32 }`
// // Solución

const input = [12, 46, 32, 64];
let mean = 0
let median = 0
input.forEach(valor => {
    
        // console.log(valor);
        mean += valor; 
        median = valor / 2; 
}); 

mean = mean / input.length;
console.log(`mean: ${mean}, median ${median}`);



// // ## Problema 3
// // Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.
// // Caso de prueba:
// // `const input = 6;`
// // Result: `720`

const valor = 6;
let i = 0;
let resultado = 1;
for(i = valor ; i > 0 ; i--) {
    resultado = (resultado * i);
}

console.log(resultado);

