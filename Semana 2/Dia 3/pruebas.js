

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
