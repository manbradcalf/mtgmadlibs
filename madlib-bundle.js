const cardsAndTypes = [
  {
    name: "nameOfSomething",
    type: "Creature",
  },
  {
    name: "nameOfLand",
    type: "Land",
  },
  {
    name: "nameOfArtifact",
    type: "Artifact",
  },
];
const creatures = cardsAndTypes.filter((card) =>
  card.type.includes("Creature")
);
function r(list) {
  return list[Math.floor(Math.random() * list.length)].name;
}
function madlib1() {
  console.log(`Hello, is this Dr ${r(creatures)}?`);
}
function othermadlib1() {
  document.getElementById("madlib").innerHTML = "Updated";
}
export { madlib1 as madlib };
export { othermadlib1 as othermadlib };
export { r as r };
