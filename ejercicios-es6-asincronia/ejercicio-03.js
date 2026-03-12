/*3.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().*/
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const namesOnly = users1.map(user => user.name);
console.log("3.1 - Solo nombres:", namesOnly);

/*3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.*/
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const namesModified = users2.map(user => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    } else {
        return user.name;
    }
});
console.log("3.2 - Nombres modificados (Anacleto):", namesModified);

/*3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.*/

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const citiesVisitedStatus = cities.map(city => {
    return city.isVisited ? city.name + ' (Visitado)' : city.name;
});
console.log("3.3 - Ciudades con estado de visita:", citiesVisitedStatus);