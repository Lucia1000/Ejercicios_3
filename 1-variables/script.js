"use strict";

const nombre = prompt("Nombre:");
const color = prompt("Color:");
const edad = +prompt("Edad:");

console.log(
  "Hola, me llamo",
  nombre,
  "tengo",
  edad,
  "años y mi color favorito es el",
  color
);

console.log(
  `Hola, me llamo ${nombre} tengo ${edad} años y mi color favorito es el ${color}`
);
