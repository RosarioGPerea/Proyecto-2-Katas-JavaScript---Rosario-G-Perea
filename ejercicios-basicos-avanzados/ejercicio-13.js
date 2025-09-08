/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función: */


function nameFinder(nameList, name) {
  const find = nameList.includes(name);
  const number = nameList.indexOf(name);

    if (number !== -1){
      return [find +" "+ number];
    }
    else {
      return false;
    }
  
}

const names = [ 'Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];

console.log(nameFinder(names, 'Clint'));
console.log(nameFinder(names, "Ro"));
