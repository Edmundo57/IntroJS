//Actividad 1

let i = 0;
let array = [1,4,6,10,22,55,46,2,5,0];

for (i = 0 ; i < array.length ; i++ ) {
    (Number(array[i]) > 3) ? console.log(array[i]) : i;
}




















//Actividad 2
let array2 = [];
let i = 0;

while ( i < 5  ) {
    array2.push(i + 1) ;
    i++;
}
console.log({array2});















//Actividad 3
let array3 = [1,4,6,10,22,55,46,2,5,0];
let i = 0;

array3 = array3.sort((a , b) => a - b);
//console.log({array3});
for (i = 0 ; i < array3.length ; i++) {
    console.log(array3[i]);
}

