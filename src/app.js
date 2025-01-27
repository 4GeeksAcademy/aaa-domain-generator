let pro = ["el", "la", "nuestro"];
let adj = ["gran", "excelente", "espectacular"];
let sus = ["atleta", "programador", "chef", "astronauta"];

let dominios = [];

for (let p of pro) {
  for (let a of adj) {
    for (let n of sus) {
      let dominio = `${p}${a}${n}.com`;
      dominios.push(dominio);
    }
  }
}

const listaDeDominios = document.getElementById("lista-dominios");

for (let dominio of dominios) {
  let listItem = document.createElement("li");
  listItem.textContent = dominio;
  listaDeDominios.appendChild(listItem);
}
