// // ### Problema 1:
// // Crea una función para encontrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia. 
// // Retorna como resultado un objeto indicando las edades de cada miembro, y la diferencia de edad.
// // ```jsx
// // const Family = [
// //     {
// //       name: 'John',
// //       age: 13
// //     },
// //     {
// //       name: 'Mark',
// //       age: 56,
// //     },
// //     {
// //       name: 'Rachel',
// //       age: 45,
// //     },
// //     {
// //       name: 'Nate',
// //       age: 67,
// //     },
// //     {
// //       name: 'Jeniffer',
// //       age: 65,
// //     }
// //   ];
// // ```
// // Expected result:
// // ```jsx
// //     {
// //     oldest: 67,
// //     youngest: 13,
// //     'age-difference': 54
// //   }

const Family = [
        {
          name: 'John',
          age: 13
        },
        {
          name: 'Mark',
          age: 56,
        },
        {
          name: 'Rachel',
          age: 45,
        },
        {
          name: 'Nate',
          age: 67,
        },
        {
          name: 'Jeniffer',
          age: 65,
        }
      ];

function edadMayorMenorDiferencia ( arreglo ) {
    const regresa = {
        joven : 0,
        mayor :0,
        diferencia: 0,
    }

    arreglo.map(miembro => {
        regresa.joven = regresa.joven == 0 || miembro.age < regresa.joven ? miembro.age : regresa.joven;
        regresa.mayor = regresa.mayor == 0 || miembro.age > regresa.mayor ? miembro.age : regresa.mayor;
    })

    regresa.diferencia = regresa.mayor - regresa.joven;

    return regresa
} 

const resultado = edadMayorMenorDiferencia(Family);
console.log(resultado);








// // ### Problema 2
// // Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.
// // `const numbers = [ 1, -4, 12, 0, -3, 29, -150];`
const numbers = [ 1, -4, 12, 0, -3, 29, -150];
let resultado2 = 0;
numbers.map(number => {number > 0 ? resultado2 += number : resultado2});
console.log(resultado2);





// // ### Problema 3
// // Cuente las ocurrencias de distintos elementos en la matriz 2D dada. La entrada dada es una matriz
// // , cuyos elementos son matrices de cadenas. El resultado es un objeto cuyos nombres de propiedad son los valores de las matrices 
// // y su valor es el número de sus ocurrencias.
// // ```jsx
// // const input = [
// //     ['a', 'b', 'c'],
// //     ['c', 'd', 'f'],
// //     ['d', 'f', 'g'],
// //   ];
// // ```
// // Resultado esperado:
// // ```jsx
// // {
// //     a: 1,
// //     b: 1,
// //     c: 2,
// //     d: 2,
// //     f: 2,
// //     g: 1,
// //   }

const inputM = [
        ['a', 'b', 'c'],
        ['c', 'd', 'f'],
        ['d', 'f', 'g'],
      ];

const obj = {};

inputM.map(i => i.map (j => isNaN(obj[j]) ? obj[j] = 1 : obj[j] = obj[j] + 1 ))

console.log(obj);







// // ```
// // ### Problema 4
// // Escriba una función de JavaScript que tomará una serie de números almacenados
// // y encontrará el segundo número más bajos y segundos más altos, respectivamente
// // del siguiente arreglo:  *`const arr = [3,4,6,1,5,2,9,10,23,12]`*
// // ```jsx
// // const arr = [3,4,6,1,5,2,9,10,23,12]

const arr = [3,4,6,1,5,2,9,10,23,12];
const arr2 = arr.sort((a,b) => a-b);
console.log(arr2);
console.log(`Segundo numero mas bajo ${arr2[1]} , segundo numero mayor: ${arr2[arr2.length-2]}`);



// // ```
// // ### Problema 5:
// // De la siguiente estructura de datos, contesta las siguientes preguntas creando un programa para cada una.
// // ```jsx
// // let info = [
// //     {
// //         nombre: "Diego",
// //         materias: [
// //             {
// //                 nombreMateria: "español",
// //                 calificacion: 100
// //             },
// //             {
// //                 nombreMateria: "matemáticas",
// //                 calificacion: 70
// //             },
// //             {
// //                 nombreMateria: "ciencias",
// //                 calificacion: 55
// //             }
// //         ]
// //     },
// //     {
// //         nombre: "Jorge",
// //         materias: [
// //             {
// //                 nombreMateria: "español",
// //                 calificacion: 60
// //             },
// //             {
// //                 nombreMateria: "matemáticas",
// //                 calificacion: 65
// //             },
// //             {
// //                 nombreMateria: "ciencias",
// //                 calificacion: 80
// //             }
// //         ]
// //     }
// // ]
// // ```
// // 1. Retorna en un array las calificaciones de todos los estudiantes.
// // 2. Retorna el promedio de cada uno de los alumnos, devolviendo un arreglo con objetos como esto: 



let info = [
        {
            nombre: "Diego",
            materias: [
                {
                    nombreMateria: "español",
                    calificacion: 100
                },
                {
                    nombreMateria: "matemáticas",
                    calificacion: 70
                },
                {
                    nombreMateria: "ciencias",
                    calificacion: 55
                }
            ]
        },
        {
            nombre: "Jorge",
            materias: [
                {
                    nombreMateria: "español",
                    calificacion: 60
                },
                {
                    nombreMateria: "matemáticas",
                    calificacion: 65
                },
                {
                    nombreMateria: "ciencias",
                    calificacion: 80
                }
            ]
        }
    ]

function alumnoPromedio(alumno) {
    let dato = {};
    let promedio = 0;

    alumno.materias.map(materia => promedio += materia.calificacion);

    dato[alumno.nombre] = {} 
    dato[alumno.nombre].promedio = Number(promedio / alumno.materias.length ).toFixed(1);


    return dato
}

// Solucion 1
let todo = [];
info.map(alu => alu.materias.map(mat => todo.push(mat.calificacion)));
console.log(todo);

// Solucion 2
let promedios = info.map( alu => alumnoPromedio(alu) );
console.log(promedios);


// // ```jsx
// // [
// //   { 
// //     "Jorge": {
// //       "promedio": 8.6
// //     }
// //   },
// //   {
// //     "Alumno": {
// //       "promedio": 5.5
// //     }
// //   },
// //   {
// //     "Alumno": {
// //       "promedio": 5.5
// //     }
// //   }
// // ]
// // ```



let info2 = [
    {
        nombre: "Diego",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 100
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 70
            },
            {
                nombreMateria: "ciencias",
                calificacion: 55
            }
        ]
    },
    {
        nombre: "Jorge",
        materias: [
            {
                nombreMateria: "español",
                calificacion: 60
            },
            {
                nombreMateria: "matemáticas",
                calificacion: 65
            },
            {
                nombreMateria: "ciencias",
                calificacion: 80
            }
        ]
    }
]

// // 1. Retorna la calificación mas baja
let calificacionMasBaja = 0;
info2.map(alu => alu.materias.map(mat => calificacionMasBaja == 0 || calificacionMasBaja > mat.calificacion ? calificacionMasBaja = mat.calificacion : calificacionMasBaja));
console.log(calificacionMasBaja);

// // 2. Retorna la calificación mas alta
let calificacionMasAlta = 0;
info2.map(alu => alu.materias.map(mat => calificacionMasAlta == 0 || calificacionMasAlta < mat.calificacion ? calificacionMasAlta = mat.calificacion : calificacionMasAlta));
console.log(calificacionMasAlta);


// // ### Problema 6
// // Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.
// // `matriz = [7,2,5,3,5,3]`
// // `br = [7,2,5,4,6,3,5,3]`
// // Los números que faltan en arr son `[4,6]`

let br = [7,2,5,3,5,3];
let matriz = [7,2,5,4,6,3,5,3];

br = br.sort((a,b) => a-b)
// console.log(br);

let resultado6 = [];

 matriz.map( m => br.indexOf( m ) < 0 ? resultado6.push(m) : m  );
//matriz.map( m => resultado6.push(m)   );

console.log(resultado6);

// // ### Problema 7
// // **Objetos-Recursividad:**
// // Dada la siguiente estructura de datos, encuentra la cantidad de veces que está la propiedad `id`
// // ```
// // const root2 = {
// //   id: '123',
// //   child: [{
// //     id: '234',
// //     child: [{
// //       test: {
// //         id: 2
// //       }
// //     }]
// //   }],
// //   child2: [{
// //     id: '345',
// //     child3: {
// //       id: '534'
// //     }
// //   }]
// // };
// // ```
// // Contraer
// // marca_de_verificación_blanca
// // ojos
// // manos_levantadas



const root2 = {
    id: '123',
      child: [{
          id: '234',
              child: [{
                      test: {
                          id: 2
                          }
      }]
    }],
    child2: [{
      id: '345',
      child3: {
        id: '534'
      }
    }]
    // ,
    // child3: [{
    //   id: '345',
    //   child3: {
    //     id: '534'
    //   }
    // }]
  
  
  };

  function sumaId(dato) {

    let v = Object.getOwnPropertyNames(dato);

      // dato.length == 0 ? resultado7 += 1 : dato.map(d => sumaId(d));
    // console.log(v[0]);
    
    v.forEach(ve => //console.log(ve) //console.log(dato[`${ve}`])
        ve == 'id' ? resultado7++ : sumaId(dato[`${ve}`])
    )

    // console.log(dato[`${v[0]}`]);

    //   console.log(dato[v[0].getOwnPropertyNames]);
    //   console.log(dato.length == 1);

    //   return dato == 1 ? resultado7++ : dato.map(m => sumaId(m)) ;

    return resultado7;
  }



// console.log(v);
  
let resultado7 = 0;
sumaId(root2);
console.log(resultado7);

















