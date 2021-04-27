const cards = JSON.parse(Deno.readTextFileSync("./modernAtomic.json"));

function r(list: { name: string; type: string }[]) {
  return list[Math.floor(Math.random() * list.length)].name;
}
type card = [{ name: string; type: string }];

const cardsAndTypes = Object.values(cards.data as card[]).map((c) => ({
  name: c[0].name,
  type: c[0].type,
}));

Deno.writeTextFileSync(
  "./modernCardsAndTypes.json",
  JSON.stringify(cardsAndTypes)
);

const artifacts = cardsAndTypes.filter((card) =>
  card.type.includes("Artifact")
);

const creatures = cardsAndTypes.filter((card) =>
  card.type.includes("Creature")
);
const lands = cardsAndTypes.filter((card) => card.type.includes("Land"));
const enchantments = cardsAndTypes.filter((card) =>
  card.type.includes("Enchantment")
);
const instantsAndSorceries = cardsAndTypes.filter(
  (card) => card.type.includes("Instant") || card.type.includes("Sorcery")
);
console.log(`random artifact: ${r(artifacts)}\n
creature:${r(creatures)}\n
land:${r(lands)}\n
enchantment:${r(enchantments)}\n
instant or sorcery: ${r(instantsAndSorceries)}`);

export { r, artifacts, creatures, lands, enchantments, instantsAndSorceries };
