const cardsAndTypes = JSON.parse(Deno.readTextFileSync("./modernCardsAndTypes.json"));
function r1(list) {
    return list[Math.floor(Math.random() * list.length)].name;
}
const artifacts1 = cardsAndTypes.filter((card)=>card.type.includes("Artifact")
);
const creatures1 = cardsAndTypes.filter((card)=>card.type.includes("Creature")
);
const lands1 = cardsAndTypes.filter((card)=>card.type.includes("Land")
);
const enchantments1 = cardsAndTypes.filter((card)=>card.type.includes("Enchantment")
);
const instantsAndSorceries1 = cardsAndTypes.filter((card)=>card.type.includes("Instant") || card.type.includes("Sorcery")
);
console.log(`\n  random artifact: ${r1(artifacts1)}\n  creature:${r1(creatures1)}\n\n  land:${r1(lands1)}\n\n  enchantment:${r1(enchantments1)}\n\n  instant or sorcery: ${r1(instantsAndSorceries1)}\n  `);
export { r1 as r, artifacts1 as artifacts, creatures1 as creatures, lands1 as lands, enchantments1 as enchantments, instantsAndSorceries1 as instantsAndSorceries };
