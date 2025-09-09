/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.

Puedes usar este array: */

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const newPlacesToTravel = [];
const removePlaces = [11, 40];

for (const place of placesToTravel) {
  if (!removePlaces.includes(place.id)) {
    newPlacesToTravel.push(place);
  }
}

console.log(newPlacesToTravel);
