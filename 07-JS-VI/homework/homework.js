// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  return cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada

  var SumReduce= numeros.reduce(function(acc,elem){
    return acc+elem;
  });
  cb(SumReduce);
 /* let sum = 0;
  for (let i = 0; i < numeros.length; i++) {
    sum+=numeros[i];
  }

  cb(sum);
  */
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  
  array.forEach(function(element,ind){
    cb(element);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento

var res = array.map(function(element,ind){
    return cb(element);
});
/*let res=[];
for (let i = 0; i <array.length; i++) {
   res[i]=cb(array[i]);
  }
*/
  return res;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
