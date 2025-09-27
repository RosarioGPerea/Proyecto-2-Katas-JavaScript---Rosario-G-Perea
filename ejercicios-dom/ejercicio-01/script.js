/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

const classShowme = document.querySelector(".showme");
console.log(classShowme);

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

const pillado = document.querySelector("#pillado");
console.log(pillado);

/* 1.3 Usa querySelector para mostrar por consola todos los p */

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

const pokeElementos = document.querySelectorAll(".pokemon");
console.log(pokeElementos);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe". */

const atributo = document.querySelectorAll('[data-function="testMe"]');
console.log(atributo);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe". */

const atributo3 = document.querySelectorAll('[data-function="testMe"]');
let tercerAtributo = atributo3[2];
console.log(tercerAtributo);