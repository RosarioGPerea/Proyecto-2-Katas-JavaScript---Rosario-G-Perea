/* Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.
 */
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  if (typeof country !== "string") {
    return country;
  }
    const capital = capitals[country];
    if (capital){
      return ("La capital de " + country + " es " + capital);
    } else {
      return ("Esta capital -> " + country + " <- no está en la lista.");
    }
  }

  console.log(getCapital("Greece"));
  console.log(getCapital("Midgar"));