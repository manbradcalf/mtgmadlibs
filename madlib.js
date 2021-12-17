import {
creatures,
lands} from "./cards.js"

function r(list) {
  return list[Math.floor(Math.random() * list.length)].name;
}

export function madlib() {
  console.log(
    `Hello, is this Dr ${r(
      creatures
    )}?`
  );
}
export function othermadlib() {
  document.getElementById("madlib").innerHTML = "Updated";
}
