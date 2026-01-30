const output = document.getElementById("output");
const commandForm = document.getElementById("command-form");
const commandInput = document.getElementById("command");

const state = {
  currentNode: "acheybo",
  inventory: new Set(["star-map"]),
  flags: {
    hasSphere: false,
    openHand: false,
    noteWritten: false,
    sphereUsed: false,
  },
};

const itemData = {
  picket: {
    description: "A small starcraft for short leaps, its cabin glowing with bioluminescent panels.",
    aliases: ["picket", "craft", "ship"],
  },
  map: {
    description: "A stellar chart creased by travel, the ink still smelling faintly of brass.",
    aliases: ["map", "chart", "star-map"],
  },
  "red sphere": {
    description: "A mime-made nanite ball, warm as a pulse and lighter than air.",
    aliases: ["red sphere", "sphere", "ball"],
  },
  mural: {
    description: "A painted promise, cracked at the edges but still loud with hope.",
    aliases: ["mural", "promise"],
  },
  mime: {
    description: "A juggler and conjurer of quiet revolutions, speaking in gestures and glances.",
    aliases: ["mime", "juggler"],
  },
  "free coup voucher": {
    description: "A stamped slip granting one sanctioned upheaval, already half-burned.",
    aliases: ["free coup voucher", "voucher", "coup"],
  },
  "barbed wire": {
    description: "Bales of wire coiled like sleeping snakes, waiting to be unmade.",
    aliases: ["barbed wire", "wire", "barbed"],
  },
  podium: {
    description: "A podium of bulletproof sugar-glass, still glittering with past speeches.",
    aliases: ["podium"],
  },
  wordle: {
    description: "A leader who insists there are no leaders, eyes sharp with strategy.",
    aliases: ["wordle", "leader"],
  },
  "gene-index": {
    description: "A shimmering archive where kinship is searched like a database query.",
    aliases: ["gene-index", "index", "genes"],
  },
  note: {
    description: "A folded paper, blank until it must become your departure.",
    aliases: ["note", "paper"],
  },
  "pronoun lexicon": {
    description: "A living dictionary, its entries shifting with bodies and weather.",
    aliases: ["pronoun lexicon", "lexicon", "pronouns"],
  },
  "wow swarm": {
    description: "Watcher drones at insect scale, buzzing like pollen around your decisions.",
    aliases: ["wow swarm", "swarm", "drones"],
  },
  "quicksilver bridle": {
    description: "A bridle that trembles like mercury, warm even in the wind.",
    aliases: ["quicksilver bridle", "bridle", "quicksilver"],
  },
  "street lamp question": {
    description: "An ethical riddle scribbled in the margins of a city without police.",
    aliases: ["street lamp question", "lamp", "question"],
  },
  curtain: {
    description: "A portable porch curtain with a scent you cannot place.",
    aliases: ["curtain", "drape"],
  },
  mule: {
    description: "Margery, a steadfast mule with the patient gaze of a companion.",
    aliases: ["mule", "margery"],
  },
  "airship deck": {
    description: "An aerial garden of windmills and crops, welcoming and precarious.",
    aliases: ["airship deck", "deck", "airship"],
  },
  "wren sigil": {
    description: "A family mark that appears wherever the La Wrens have already been.",
    aliases: ["wren sigil", "sigil", "wren"],
  },
  snowman: {
    description: "Half-built, soft around the edges, already listening for stories.",
    aliases: ["snowman", "snow"],
  },
  "story-machine": {
    description: "A brass voice with a thousand epilogues, listening as much as it speaks.",
    aliases: ["story-machine", "machine", "story"],
  },
  "burning banner": {
    description: "A banner that reads WE DID IT, smoldering with unfinished futures.",
    aliases: ["burning banner", "banner"],
  },
  "seed of future": {
    description: "A small potential, dense as a promise you have not yet kept.",
    aliases: ["seed of future", "seed", "future"],
  },
  "endless ledger": {
    description: "An atlas of obligations, each line another task that sustains life.",
    aliases: ["endless ledger", "ledger", "list"],
  },
  "ink-stone": {
    description: "A writing tool heavy with permanence, hungry for more tasks.",
    aliases: ["ink-stone", "ink", "stone"],
  },
};

const nodes = {
  acheybo: {
    name: "Acheybo Rooftop",
    entry: `Acheybo City, Isne. It is early squall season. The sky is a quilt of dove-gray cloud, stitched with emerald contrails. A fast picket hums on the roof, ready to leap the Straits.

A mime juggles invisible red spheres, one of which becomes real and thuds softly at your feet.
A mural reads: THERE ARE NO POLICE HERE.`,
    details: `You are on the roof. Wind tugs at your sleeve; the city is a bruise of light beneath you. The picket is open, its cabin bright with bioluminescent panels. The mime regards you with solemn delight.`,
    things: ["picket", "map", "red sphere", "mural", "mime"],
    exits: ["livingstone"],
  },
  livingstone: {
    name: "Livingstone Quadrant",
    entry: `You dock amid a city of senate domes and glass gardens. A thousand lawmakers practice commando rolls. Every citizen receives a Free Coup Attempt, ritualized and habitual.`,
    details: `Complication: The Free Coup Attempt is an institution. The surveillance cysts shimmer in orbit.`,
    things: ["free coup voucher", "barbed wire", "podium", "wordle"],
    exits: ["agnie"],
  },
  agnie: {
    name: "Agnie Cluster",
    entry: `The sky is too full of people. A biofamily is an algorithm: you search for a child and find ten thousand, all plausible, all begging to be loved.`,
    details: `Complication: Kinship is a lottery with a house edge. Soldiers watch the balconies without blinking.`,
    things: ["gene-index", "note"],
    exits: ["trides"],
  },
  trides: {
    name: "Trides Fel",
    entry: `Mountains drift; bridges bloom from clouds. Every object seems about to hatch. Pronouns here are taxonomy, a bioessentialist labyrinth.`,
    details: `Complication: Pronouns are used as a surveillance grammar. WOW swarms hover like pollen.`,
    things: ["pronoun lexicon", "wow swarm"],
    exits: ["suun"],
  },
  suun: {
    name: "Suun (Tggx Pyyx)",
    entry: `This planet has never had police, and it has never had a moon. Horses and carts shiver into quicksilver when startled. Sleuths flourish. Clues proliferate.`,
    details: `Complication: You are here too late and too early at once. You hear laughter on the train platforms.`,
    things: ["quicksilver bridle", "street lamp question"],
    exits: ["mahmara"],
  },
  mahmara: {
    name: "Mahmara-5",
    entry: `In Reddening Reek, everyone carries a small curtain. They say you must always be ready to show someone the inside of your porch.`,
    details: `Complication: Your mind is noisy. The world becomes a puzzle that rearranges itself.`,
    things: ["curtain", "mule"],
    exits: ["lenten"],
  },
  lenten: {
    name: "Lenten Cot",
    entry: `Verdant airships hover above a labyrinth of markets. The La Wrens are everywhere—affable, wealthy, genial, inevitable.`,
    details: `Complication: The La Wrens are adjacent to everything, and thus inside it.`,
    things: ["airship deck", "wren sigil"],
    exits: ["benifotsy"],
  },
  benifotsy: {
    name: "Benifotsygate",
    entry: `Machines on every corner tell stories. Narrative is a right here, like water.`,
    details: `Complication: The stories have begun to think. One machine listens with infinite patience.`,
    things: ["snowman", "story-machine"],
    exits: ["earth"],
  },
  earth: {
    name: "Earth",
    entry: `Heat. The climate itself is a weapon. Whiteness is molten gold, extruded into police.`,
    details: `Complication: Racism and the futures it feeds on. You glimpse a victory without a clear aftermath.`,
    things: ["burning banner", "seed of future"],
    exits: ["juucnard"],
  },
  juucnard: {
    name: "The Juucnard",
    entry: `A vast cooperative makes a list of every task that sustains life. The list becomes the law; the law becomes the terrain.`,
    details: `Complication: The list will never end, and someone must keep it.`,
    things: ["endless ledger", "ink-stone"],
    exits: [],
  },
};

const interactions = {
  "red sphere": {
    take() {
      if (state.flags.hasSphere) {
        return "You already cradle the red sphere, humming like a promise.";
      }
      state.flags.hasSphere = true;
      state.inventory.add("red sphere");
      return "You lift the red sphere. It pulses once, like a heartbeat in your palm.";
    },
    use() {
      if (!state.flags.hasSphere) {
        return "Your hand remembers the sphere, but it is not here.";
      }
      if (state.flags.sphereUsed) {
        return "The sphere has already spent its bright rebellion.";
      }
      state.flags.sphereUsed = true;
      return "The sphere dissolves into a halo of light. A nearby watcher drone blinks out and falls like quiet rain.";
    },
  },
  mime: {
    talk() {
      if (!state.flags.openHand) {
        state.flags.openHand = true;
        state.inventory.add("open-hand signal");
        return "The mime teaches you the Open-Hand Signal. It is a language of refusal and care.";
      }
      return randomLine([
        "The mime mimes a door opening, then a city breathing.",
        "The mime juggles silence like it weighs something.",
        "The mime traces a circle in the air: a promise without a fence.",
        "The mime bows, and you feel the ache of a promise kept.",
      ]);
      if (state.flags.openHand) {
        return "The mime nods, recognizing the open-hand signal you already know.";
      }
      state.flags.openHand = true;
      state.inventory.add("open-hand signal");
      return "The mime teaches you the Open-Hand Signal. It is a language of refusal and care.";
    },
  },
  mural: {
    examine() {
      return "THERE ARE NO POLICE HERE. The letters are cracked, but the promise still stings.";
    },
  },
  picket: {
    enter() {
      return travelTo("livingstone");
    },
  },
  "free coup voucher": {
    use() {
      return "You storm a chamber in ceremonial zeal. It is thrilling and pointless. You decide you need something else.";
    },
  },
  wordle: {
    talk() {
      return randomLine([
        "Wordle listens as you say: Available Coups Are Broken. They nod, and the room shifts.",
        "Wordle says, \"We have no leaders,\" and then smiles like a conspiracy.",
        "Wordle sketches a map of the senate on a napkin, then lets it burn.",
        "Wordle asks, \"What else counts as a coup if not this?\"",
      ]);
      return "Wordle listens as you say: Available Coups Are Broken. They nod, and the room shifts.";
    },
  },
  note: {
    take() {
      if (state.flags.noteWritten) {
        return "The note is already folded and gone.";
      }
      state.inventory.add("note");
      return "You pocket a blank note, ready for the moment you must leave without being seen.";
    },
    use() {
      state.flags.noteWritten = true;
      state.inventory.delete("note");
      return "You leave a note where the soldiers will look first. It says only: I was here; I am gone.";
    },
  },
  "pronoun lexicon": {
    examine() {
      return "The lexicon is alive. Each page updates with the body's mood, the city's algorithm, the weather.";
    },
  },
  "wow swarm": {
    examine() {
      return "Insect-scale watcher drones buzz like pollen, sampling your gestures for forecasts.";
    },
  },
  "street lamp question": {
    examine() {
      return "What is a street lamp? Whatever it is, we should be ashamed to behold it.";
    },
  },
  curtain: {
    take() {
      state.inventory.add("curtain");
      return "You take a small porch curtain. It smells like rain and unfamiliar ownership.";
    },
  },
  mule: {
    talk() {
      return randomLine([
        "Margery the mule leans into your hand, steady as the horizon.",
        "Margery snorts softly, a weather report in miniature.",
        "Margery watches you with the patience of a long road.",
        "Margery flicks an ear, listening for thunder only she can hear.",
      ]);
      return "Margery the mule leans into your hand, steady as the horizon.";
    },
  },
  "airship deck": {
    examine() {
      return "Windmills tilt at jaunty angles. The La Wrens show you farms built on the backs of clouds.";
    },
  },
  "story-machine": {
    talk() {
      return randomLine([
        "The machine tells you a story about a city that became a building. You hear your own fear inside it.",
        "The machine whispers, \"Stories are weak, and still they move mountains.\"",
        "The machine asks if you will trade one memory for a better ending.",
        "The machine laughs softly: \"Every epilogue is a door, not a wall.\"",
      ]);
      return "The machine tells you a story about a city that became a building. You hear your own fear inside it.";
    },
  },
  "seed of future": {
    take() {
      state.inventory.add("seed of future");
      return "You take the seed of a future. It is small and heavy, an unpromised beginning.";
    },
  },
  "endless ledger": {
    examine() {
      return "The ledger lists every task that sustains life. The margins are filled with more tasks.";
    },
  },
};

const commands = new Map([
  ["HELP", handleHelp],
  ["LOOK", handleLook],
  ["EXAMINE", handleExamine],
  ["TAKE", handleTake],
  ["USE", handleUse],
  ["TALK", handleTalk],
  ["ENTER", handleEnter],
  ["TRAVEL", handleTravel],
  ["INVENTORY", handleInventory],
  ["MEMORY", handleMemory],
  ["REST", handleRest],
  ["STAY", handleStay],
]);

function printLine(text) {
  const paragraph = document.createElement("p");
  paragraph.className = "output-line";
  paragraph.textContent = text;
  output.appendChild(paragraph);
  output.scrollTop = output.scrollHeight;
}

function printDivider() {
  printLine("---");
}

function formatThings(things) {
  return things.length ? things.join(", ") : "nothing";
}

function currentNode() {
  return nodes[state.currentNode];
}

function renderEntry() {
  const node = currentNode();
  printDivider();
  printLine(node.name.toUpperCase());
  printLine(node.entry);
  printLine(`Things here: ${formatThings(node.things)}.`);
  if (node.exits.length) {
    const exitNames = node.exits.map((exit) => nodes[exit].name).join("; ");
    printLine(`Star-routes available: ${exitNames}.`);
  } else {
    printLine("Star-routes available: none. You have reached the end of the loop.");
  }
}

function normalizeTarget(value) {
  return value.trim().toLowerCase();
}

function resolveAlias(target) {
  const normalized = normalizeTarget(target);
  const match = Object.entries(itemData).find(([, data]) => data.aliases?.includes(normalized));
  return match ? match[0] : normalized;
}

function findThing(target) {
  const node = currentNode();
  const resolved = resolveAlias(target);
  return node.things.find((thing) => thing === resolved);
}

function describeThing(item) {
  return itemData[item]?.description ?? `You study the ${item}. It tells you something quiet.`;
}

function randomLine(lines) {
  return lines[Math.floor(Math.random() * lines.length)];
function findThing(target) {
  const node = currentNode();
  return node.things.find((thing) => thing === target);
}

function handleHelp() {
  printLine("Commands: LOOK, EXAMINE <thing>, TAKE <thing>, USE <thing>, TALK <person>, ENTER <place>, TRAVEL <place>, INVENTORY, MEMORY, REST, STAY.");
}

function handleLook() {
  const node = currentNode();
  printLine(node.details);
  printLine(`Things here: ${formatThings(node.things)}.`);
}

function handleExamine(target) {
  if (!target) {
    printLine("Examine what?");
    return;
  }
  const item = findThing(target);
  if (!item) {
    printLine("You do not see that here.");
    return;
  }
  const interaction = interactions[item];
  if (interaction?.examine) {
    printLine(interaction.examine());
  } else {
    printLine(describeThing(item));
    printLine(`You study the ${item}. It tells you something quiet.`);
  }
}

function handleTake(target) {
  if (!target) {
    printLine("Take what?");
    return;
  }
  const item = findThing(target);
  if (!item) {
    printLine("You do not see that here.");
    return;
  }
  const interaction = interactions[item];
  if (interaction?.take) {
    printLine(interaction.take());
  } else {
    state.inventory.add(item);
    printLine(`You take the ${item}.`);
  }
}

function handleUse(target) {
  if (!target) {
    printLine("Use what?");
    return;
  }
  const normalized = normalizeTarget(target);
  const interaction = interactions[normalized];
  if (interaction?.use) {
    printLine(interaction.use());
    return;
  }
  if (state.inventory.has(normalized)) {
    printLine(`You try using the ${normalized}, but nothing obvious happens.`);
    return;
  }
  printLine("You do not have that.");
}

function handleTalk(target) {
  if (!target) {
    printLine("Talk to whom?");
    return;
  }
  const item = findThing(target);
  if (!item) {
    printLine("They are not here.");
    return;
  }
  const interaction = interactions[item];
  if (interaction?.talk) {
    printLine(interaction.talk());
  } else {
    printLine(`The ${item} says nothing, but you learn something anyway.`);
  }
}

function handleEnter(target) {
  if (!target) {
    printLine("Enter what?");
    return;
  }
  const normalized = normalizeTarget(target);
  const interaction = interactions[normalized];
  if (interaction?.enter) {
    printLine(interaction.enter());
    return;
  }
  printLine("You cannot enter that.");
}

function handleTravel(target) {
  if (!target) {
    const exits = currentNode().exits;
    if (!exits.length) {
      printLine("There are no star-routes left. Perhaps you should STAY.");
      return;
    }
    printLine("Travel where?");
    return;
  }
  const normalized = normalizeTarget(target);
  const targetKey = Object.keys(nodes).find((key) => nodes[key].name.toLowerCase() === normalized || key === normalized);
  if (!targetKey) {
    printLine("That star-route is not on your map.");
    return;
  }
  if (!currentNode().exits.includes(targetKey)) {
    printLine("Your map does not connect to that place from here.");
    return;
  }
  printLine(travelTo(targetKey));
}

function handleInventory() {
  if (!state.inventory.size) {
    printLine("You carry nothing but your breath.");
    return;
  }
  printLine(`You carry: ${Array.from(state.inventory).join(", ")}.`);
}

function handleMemory() {
  printLine("You remember each victory, each return of the cops, each friend who taught you a quieter way to persist.");
}

function handleRest() {
  printLine("You rest. The world rearranges itself and, for a moment, is kind.");
}

function handleStay() {
  printDivider();
  printLine("You stop fleeing. You stop chasing the cops as a singular object. You begin to build the strange, everyday, patient architectures that make them unnecessary.");
  printLine("This is not a final scene; it is a beginning in a quiet key.");
  printLine(">");
}

function travelTo(key) {
  state.currentNode = key;
  renderEntry();
  return "";
}

function handleCommand(rawCommand) {
  const cleaned = rawCommand.trim();
  if (!cleaned) {
    return;
  }
  const [verb, ...rest] = cleaned.split(" ");
  const command = verb.toUpperCase();
  const target = rest.join(" ");
  const handler = commands.get(command);
  printLine(`> ${cleaned.toUpperCase()}`);
  if (handler) {
    handler(target);
  } else {
    printLine("The parser blinks. Try HELP.");
  }
}

function startGame() {
  printLine("Non-Abolitions");
  printLine("An Interactive Fiction by You");
  printLine("Release 2 / Serial number 000000");
  renderEntry();
}

commandForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleCommand(commandInput.value);
  commandInput.value = "";
  commandInput.focus();
});

startGame();
commandInput.focus();
