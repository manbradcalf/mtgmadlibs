type Card = {
  name: string;
  type: string;
};

import {cards} from "../data/modernCardsAndTypes.js"
function r(list: Card[]) {
  return list[Math.floor(Math.random() * list.length)].name;
}

const artifacts = cards.filter((card) =>
  card.type.includes("Artifact")
);

const creatures = cards.filter((card) =>
  card.type.includes("Creature")
);

const lands = cards.filter((card) => card.type.includes("Land"));

const enchantments = cards.filter((card) =>
  card.type.includes("Enchantment")
);

const instantsAndSorceries = cards.filter(
  (card) => card.type.includes("Instant") || card.type.includes("Sorcery")
);

function generateMadlib(rawText: string): string {
  //TODO: This method uses the same type for each instance.
  // Ex. My $creature and his friend $Creature returns
  // My Llanowar Elves and his friend Llanowar Elves
  rawText = rawText.replace(/\$creature/ig, r(creatures));
  rawText = rawText.replace(/\$artifact/ig, r(artifacts));
  rawText = rawText.replace(/\$land/ig, r(lands));
  rawText = rawText.replace(/\$enchantment/ig, r(enchantments));
  rawText = rawText.replace(/\$instantOrSorcery/ig, r(instantsAndSorceries));
  return rawText;
}
export { r, artifacts, creatures, lands, enchantments, instantsAndSorceries, generateMadlib };
