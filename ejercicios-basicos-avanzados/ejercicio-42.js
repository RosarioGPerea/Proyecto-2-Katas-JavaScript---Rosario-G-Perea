/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indice1, indice2) {
  let primero = array[indice1];
  array.splice(indice1, 1, array[indice2]);
  array.splice(indice2, 1, primero);
  return array;
}

console.log(swap(fantasticFour, 2, 0));