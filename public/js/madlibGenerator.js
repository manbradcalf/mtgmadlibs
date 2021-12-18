import cards from "./modernCardsAndTypes.js";

const artifacts = cards.filter((card) => card.type.includes("Artifact"));
const creatures = cards.filter((card) => card.type.includes("Creature"));
const lands = cards.filter((card) => card.type.includes("Land"));
const enchantments = cards.filter((card) => card.type.includes("Enchantment"));
const instantsAndSorceries = cards.filter(
  (card) => card.type.includes("Instant") || card.type.includes("Sorcery")
);

function randomCreature() {
  const creature = creatures[Math.floor(Math.random() * creatures.length)].name;
  console.log(`random creature is ${creature}`);
  return creature;
}

function r(list) {
  return list[Math.floor(Math.random() * list.length)].name;
}

console.log(
  `\n  random artifact: ${r(artifacts)}\n  creature:${r(
    creatures
  )}\n\n  land:${r(lands)}\n\n  enchantment:${r(
    enchantments
  )}\n\n  instant or sorcery: ${r(instantsAndSorceries)}\n  `
);

function generateMadlib() {
  return `Hello, is this Dr ${r(
    creatures
  )}? Yes, im afraid my dog is terribly sick, Im afraid she has come down with ${r(
    enchantments
  )}.\n            Last night she was eating something from the ${r(
    lands
  )} behind my home and this morning she began to throw up what looked like a pile of ${r(
    artifacts
  )}s before pooping out what can only be described as ${r(
    instantsAndSorceries
  )}. I went to wipe her afterwards and her anal glands looked like ${r(
    lands
  )}. I've read online about ${r(instantsAndSorceries)} and ${r(
    enchantments
  )} for curing dogs with severe diarrhea, do you think either of those will work?`;
}

export { randomCreature, generateMadlib };
