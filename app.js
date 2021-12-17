const cards = JSON.parse(Deno.readTextFileSync("./modernAtomic.json"));
function r1(list) {
    return list[Math.floor(Math.random() * list.length)].name;
}
const cardsAndTypes = Object.values(cards.data).map((c)=>({
        name: c[0].name,
        type: c[0].type
    })
);
Deno.writeTextFileSync("./modernCardsAndTypes.json", JSON.stringify(cardsAndTypes));
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
console.log(`random artifact: ${r1(artifacts1)}\n\ncreature:${r1(creatures1)}\n\nland:${r1(lands1)}\n\nenchantment:${r1(enchantments1)}\n\ninstant or sorcery: ${r1(instantsAndSorceries1)}`);
export { r1 as r, artifacts1 as artifacts, creatures1 as creatures, lands1 as lands, enchantments1 as enchantments, instantsAndSorceries1 as instantsAndSorceries };
