/* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función: */


function repeatCounter(list) {
  const counter = {};  //contenedor vacío donde meter los "item" de la lista.
  for (const item of list) {
    counter[item] = (counter[item] || 0) + 1;
  }
  return counter;
}

const words = [ 'code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'sleep', 'code'];

console.log(repeatCounter(words));



