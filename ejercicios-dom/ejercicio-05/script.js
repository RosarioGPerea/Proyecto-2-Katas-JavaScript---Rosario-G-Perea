/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const body = document.body;

const header = document.createElement("header");

const h1 = document.createElement("h1");
h1.textContent = "Mis albums de metal favoritos";
header.appendChild(h1);

const nav = document.createElement("nav");
const ulNav = document.createElement("ul");
const liHome = document.createElement("li");
liHome.textContent = "Home";

const liAlbums = document.createElement("li");
liAlbums.textContent = "Albums";

const liContact = document.createElement("li");
liContact.textContent = "Contact"; 
ulNav.appendChild(liHome);
ulNav.appendChild(liAlbums);
ulNav.appendChild(liContact);
nav.appendChild(ulNav);
header.appendChild(nav);
body.appendChild(header);

const main = document.createElement("main");
const ulAlbums = document.createElement("ul");
for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  ulAlbums.appendChild(li);
}
main.appendChild(ulAlbums);
body.appendChild(main);

const footer = document.createElement("footer");
const pFooter = document.createElement("p");
pFooter.textContent = "© 2024 Metal Albums Inc.";
footer.appendChild(pFooter);
body.appendChild(footer);
