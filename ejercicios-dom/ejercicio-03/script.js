/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");
for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
}
console.log(ul);

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere". */
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const divPrintHere = document.querySelector('div[data-function="printHere"]');
const ulCars = document.createElement("ul");
for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
}
divPrintHere.appendChild(ulCars);

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen. */
const ciudades = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const body = document.body;
ciudades.forEach((ciudad) => {
  const divCiudad = document.createElement("div");
  const h4 = document.createElement("h4");
  h4.textContent = ciudad.title;
  const img = document.createElement("img");
  img.src = ciudad.imgUrl;
  divCiudad.appendChild(h4);
  divCiudad.appendChild(img);
  body.appendChild(divCiudad);
});

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs. */

const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar último div";
body.appendChild(botonEliminar);

botonEliminar.addEventListener("click", () => {
  const divs = document.querySelectorAll("body > div");
  if (divs.length > 0) {
    const ultimoDiv = divs[divs.length - 1];
    ultimoDiv.remove();
  }
});

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html. */
const divs = document.querySelectorAll("body > div");
divs.forEach((div) => {
  const botonEliminarDiv = document.createElement("button");
  botonEliminarDiv.textContent = "Eliminar este div";
  div.appendChild(botonEliminarDiv);
  botonEliminarDiv.addEventListener("click", () => {
	div.remove();
	  });
});

