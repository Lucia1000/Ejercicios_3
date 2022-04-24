"use strict";

const nombre = prompt("Nombre:");
const edad = +prompt("Edad:");

if (edad < 12) {
  console.log(
    `A ${nombre} le corresponde el descuento infantil :'Menores de 12'`
  );
} else if (edad < 30) {
  console.log(
    `A ${nombre} le corresponde el descuento juvenil :'Menores de 30'`
  );
} else if (edad > 60) {
  console.log(
    `A ${nombre} le corresponde el descuento de jubilados :'Mayores de 60'`
  );
} else {
  console.log(`No le corresponde ningún descuento`);
}
