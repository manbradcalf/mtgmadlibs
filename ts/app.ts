type Card = {
  name: string;
  type: string;
};

import {cards} from "../data/modernCardsAndTypes.js"
function r(list: Card[]) {
  return list[Math.floor(Math.random() * list.length)].name;
}

// const cardsAndTypes = Object.values(cards.data as card[]).map((c) => ({
//   name: c[0].name,
//   type: c[0].type,
// }));

// Deno.writeTextFileSync(
//   "./modernCardsAndTypes.json",
//   JSON.stringify(cardsAndTypes)
// );

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
  rawText = rawText.replace(/\$creature/ig, r(creatures));
  rawText = rawText.replace(/\$artifcate/ig, r(artifacts));
  rawText = rawText.replace(/\$land/ig, r(lands));
  rawText = rawText.replace(/\$enchantment/ig, r(enchantments));
  rawText = rawText.replace(/\$instantOrSorcery/ig, r(instantsAndSorceries));
  return rawText;
}
export { r, artifacts, creatures, lands, enchantments, instantsAndSorceries, generateMadlib };
