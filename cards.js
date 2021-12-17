const cardsAndTypes = [{name:"nameOfSomething",type:"Creature"},{name:"nameOfLand",type:"Land"},{name:"nameOfArtifact",type:"Artifact"}]

const creatures = cardsAndTypes.filter((card) =>
  card.type.includes("Creature")
);

const artifacts = cardsAndTypes.filter((card) =>
  card.type.includes("Artifact")
);

const lands = cardsAndTypes.filter((card) => card.type.includes("Land"));

export {creatures,artifacts,lands}
