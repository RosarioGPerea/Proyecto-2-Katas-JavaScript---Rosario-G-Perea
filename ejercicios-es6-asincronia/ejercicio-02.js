/*2.1 Dado el siguiente array, crea una copia usando spread operators.*/

const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsList];
console.log("2.1 - Copia de pointsList:", pointsListCopy);

/*2.2 Dado el siguiente objeto, crea una copia usando spread operators.*/

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy};
console.log("2.2 - Copia de toy:", toyCopy);

/*2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.*/

const pointsLis2 = [54,87,99,65,32];
/*No declararé pointList porque ya está mas arriba*/

const combinedPointsList = [...pointsList, ...pointsLis2];
console.log("2.3 - Combinación de pointsList y pointsLis2:", combinedPointsList);

/*2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.*/

/*Aquí también omitiremos toy por estar arriba*/
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const mergedToy = {...toy, ...toyUpdate};
console.log("2.4 - Fusión de toy y toyUpdate:", mergedToy);

/*2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread peratos.*/

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("2.5 - Copia de colors sin el elemento en posición 2:", colorsCopy);