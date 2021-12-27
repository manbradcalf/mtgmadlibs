import { cards } from "../data/modernCardsAndTypes.js";

type Card = {
  name: string;
  type: string;
};

function r(list: Card[]) {
  return list[Math.floor(Math.random() * list.length)].name;
}

const artifacts = cards.filter((card) => card.type.includes("Artifact"));

const creatures = cards.filter((card) => card.type.includes("Creature"));

const lands = cards.filter((card) => card.type.includes("Land"));

const enchantments = cards.filter((card) => card.type.includes("Enchantment"));

const instantsAndSorceries = cards.filter(
  (card) => card.type.includes("Instant") || card.type.includes("Sorcery")
);

function generateMadlib(rawText: string): string {
  // Nest the call to r() in an anonymous function to execute on each match
  rawText = rawText.replace(/\$creature/gi, () => r(creatures));
  rawText = rawText.replace(/\$artifact/gi, () => r(artifacts));
  rawText = rawText.replace(/\$land/gi, () => r(lands));
  rawText = rawText.replace(/\$enchantment/gi, () => r(enchantments));
  rawText = rawText.replace(/\$instantOrSorcery/gi, () => r(instantsAndSorceries));
  return rawText;
}
export {
  r,
  artifacts,
  creatures,
  lands,
  enchantments,
  instantsAndSorceries,
  generateMadlib,
};
