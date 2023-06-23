"use strict";

const decirHola = (funcionSaludadora) => {
  console.log("ahi viene el saludo");
  funcionSaludadora();
};

decirHola(() => {
  console.log("hola");
});

const hola = {
  edad,
  nom: "german",
};

console.log(hola.nom);
