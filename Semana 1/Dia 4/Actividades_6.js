// Actividad 1
var animals = ['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals = ['panter','dragon','turtle'];

animals = animals.concat(comingSoonAnimals);
console.log(animals);


// Actividad 2
let array = [4,6,1,0,8,2,45,11,5,33,50,101];
let i = 0;

array = array.sort((a , b) => a - b);
//console.log({array});
for (i = 0 ; i < array.length ; i++) {
    console.log(array[i]);
}

// Actividad 3
var animals = ['eagle','parrot','monkey','boar','lion'];
animals.push('cow');
console.log(animals);

// Actividad 4
var animals = ['eagle','parrot','monkey','boar','lion'];
animals.shift();
console.log(animals);

// Actividad 5
var animals = ['eagle','parrot','monkey','boar','lion'];
let indexAnimals = 0;

indexAnimals = animals.indexOf('parrot');
console.log(indexAnimals);