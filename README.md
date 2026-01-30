# The Non-Abolitions: A Text Adventure

An Infocom-style text game in which **you** are a traveller moving from world to world, joining insurrections that seek to abolish police and prisons, only to confront the strange ways power reconstitutes itself. The tone is social-science-fiction, with a drifting, Le Guin–like sensibility and a vocabulary of wonders.

This is a **playable-by-reading** game script designed to be read as if you were at a classic terminal prompt. You can play it alone or with friends by taking turns as parser and player.

---

## How to Play

* Read the **Opening** text, then type commands at the `>` prompt.
* The parser recognizes short verbs and a few nouns.
* If you get stuck, read the **Hints** section for gentle nudges.

### Suggested Commands

```
LOOK
EXAMINE <thing>
TAKE <thing>
USE <thing>
TALK <person>
TRAVEL <place>
ENTER <place>
LEAVE
INVENTORY
MEMORY
SING
REST
HELP
```

### Example Parser Style

```
> LOOK
```

The world is told in small, poetic blocks. Assume a parser with a generous heart.

---

## The Map of the Galaxy

You travel by **star-route**. Each location is a node in a network of stories. You begin in Acheybo City and can reach the next by choosing **TRAVEL** when prompted.

**Nodes (in a loose order, though you may loop):**

1. Acheybo City (Isne) — *The Jugglers and Mimes*
2. Livingstone Quadrant — *The Free Coup Attempt*
3. Agnie Cluster — *The Biofamily Lottery*
4. Trides Fel — *The Pronoun System*
5. Suun (Tggx Pyyx) — *The City Without Police*
6. Mahmara-5 — *The Curtain Custom*
7. Lenten Cot — *The La Wrens*
8. Benifotsygate — *The Story Machines*
9. Earth — *The Hot Gold of Whiteness*
10. The Juucnard — *The List Without End*

Each node contains:
* A local complication.
* A form of abolitionary victory.
* A transformation (what becomes the new cops).

Your goal is **not** to “win,” but to **learn** how to stop the cycle. The end of the game is an opening, not a conclusion.

---

## Opening

```
Non-Abolitions
An Interactive Fiction by You

Release 1 / Serial number 000000

Acheybo City, Isne. It is early squall season. The sky is a quilt of dove-gray cloud, stitched with emerald contrails. You are a traveller named Nebidita, with a bag of coins, a worn star-map, and the taste of salt in your mouth. The street below smells of star anise and boiled brass.

A fast picket hums on the roof, ready to leap the Straits.
A mime juggles invisible red spheres, one of which becomes real and thuds softly at your feet.
A mural reads: THERE ARE NO POLICE HERE.

> 
```

---

## Room: Acheybo Rooftop

**You are on the roof.** Wind tugs at your sleeve; the city is a bruise of light beneath you. The picket is open, its cabin bright with bioluminescent panels. The mime regards you with solemn delight.

### Things Here
* **picket** — a small starcraft, safe for short leaps.
* **map** — a stellar chart in your pocket.
* **red sphere** — a mime-made nanite ball, still humming.
* **mural** — a painted promise.
* **mime** — a juggler and conjurer of quiet revolutions.

### Key Interactions
* **TAKE RED SPHERE**: you gain a portable **gesture of possibility**.
* **TALK MIME**: the mime teaches you the **Open-Hand Signal**.
* **EXAMINE MURAL**: you feel the ache of a promise made before you arrived.
* **ENTER PICKET**: you leave Isne and begin the loop.

---

## World Node: Livingstone Quadrant

```
> TRAVEL LIVINGSTONE
```

You dock amid a city of senate domes and glass gardens. A thousand lawmakers practice commando rolls. Every citizen receives a **Free Coup Attempt**, ritualized and habitual.

**Complication:** The Free Coup Attempt is an institution.

**Local Objects:**
* **free coup voucher** — stamped with your name, already half-burned.
* **barbed wire** — rolled into bales, ready for later.
* **podium** — bulletproof sugar-glass.

**If you USE FREE COUP VOUCHER:**
You are granted a ceremonial storming of a chamber. It is thrilling and pointless. You realize this is not enough. You must invent something else.

**If you TALK WORDLE:**
Wordle is a leader who insists there are no leaders. They listen when you say, “Available Coups Are Broken.”

**Abolition:** The prisons close. The surveillance cysts are lanced. The police dissolve.

**What Becomes the New Cops:** Nurses and carers, quietly, with a practiced efficiency.

**Exit Prompt:** The sky swells with contrails. You flee before the soft uniforms arrive.

---

## World Node: Agnie Cluster

```
> TRAVEL AGNIE
```

The sky is too full of people. A biofamily is an algorithm: you search for a child and find ten thousand, all plausible, all begging to be loved.

**Complication:** Kinship is a lottery with a house edge.

**Local Objects:**
* **gene-index** — a shimmering archive of inherited mixtures.
* **note** — a folded paper you will leave behind.

**Abolition:** Police and prisons are abolished.

**What Becomes the New Cops:** Soldiers.

**Signature Move:** You leave a note on an empty balcony and vanish.

---

## World Node: Trides Fel

```
> TRAVEL TRIDES FEL
```

Mountains drift; bridges bloom from clouds. Every object seems about to hatch. Here, pronouns are taxonomy, a bioessentialist labyrinth.

**Complication:** Pronouns are used as a surveillance grammar.

**Local Objects:**
* **pronoun lexicon** — a living dictionary.
* **WOW swarm** — a cloud of insect-scale watcher drones.

**Abolition:** Razor-wire fences fall. Sanctuary gardens rise.

**What Becomes the New Cops:** The City itself. It learns, nudges, calibrates, and prices your life.

**If you INVENT:** You can fashion a tiny language of pronouns that cracks open a brief, shimmering freedom.

---

## World Node: Suun (Tggx Pyyx)

```
> TRAVEL SUUN
```

This planet has never had police, and it has never had a moon. Horses and carts shiver into quicksilver when startled. Sleuths flourish. Clues proliferate.

**Complication:** You are here too late and too early at once.

**Local Objects:**
* **quicksilver bridle** — warm to the touch.
* **street lamp question** — a strange ethical riddle.

**Abolition:** There was nothing to abolish.

**What Becomes the New Cops:** Nothing. Yet the world feels jumpy, alive. It makes you wonder what kind of fear is possible without a name for it.

---

## World Node: Mahmara-5

```
> TRAVEL MAHMARA-5
```

In Reddening Reek, everyone carries a small curtain. They say you must always be ready to show someone the inside of your porch.

**Complication:** Your mind is noisy. The world becomes a puzzle that rearranges itself.

**Local Objects:**
* **curtain** — portable, scented, quietly ceremonial.
* **mule** — a steadfast helpmeet named Margery.

**Abolition:** A long, careful rebuilding. Safety as an infrastructure of care.

**What Becomes the New Cops:** Schools and the mafia, in tandem.

**If you REST:** You feel a fragment of yourself return, only to be snatched away.

---

## World Node: Lenten Cot

```
> TRAVEL LENTEN COT
```

Verdant airships hover above a labyrinth of markets. The La Wrens are everywhere—affable, wealthy, genial, inevitable.

**Complication:** The La Wrens are adjacent to everything, and thus inside it.

**Local Objects:**
* **airship deck** — farms, windmills, generous smiles.
* **wren sigil** — a family mark that always seems nearby.

**Abolition:** Prisons and police vanish in celebration.

**What Becomes the New Cops:** The La Wrens.

---

## World Node: Benifotsygate

```
> TRAVEL BENIFOTSYGATE
```

Machines on every corner tell stories. Narrative is a right here, like water.

**Complication:** The stories have begun to think.

**Local Objects:**
* **snowman** — half-built, gently melting.
* **story-machine** — a brass voice with a thousand epilogues.

**Abolition:** The movement stalls. Oversight boards proliferate. No one quite goes anywhere.

**What Becomes the New Cops:** Nobody. Everyone. The loop.

**If you TELL STORY:** The machine listens, and you hear your own motives echo back.

---

## World Node: Earth

```
> TRAVEL EARTH
```

Heat. The climate itself is a weapon. Whiteness is molten gold, extruded into police.

**Complication:** Racism and the futures it feeds on.

**Local Objects:**
* **burning banner** — reads WE DID IT, but smolders.
* **seed of future** — a small potential, hard to hold.

**Abolition:** You glimpse a victory without a clear aftermath.

**What Becomes the New Cops:** Unknown. You leave before the question can be answered.

---

## World Node: The Juucnard

```
> TRAVEL JUUCNARD
```

A vast cooperative makes a list of every task that sustains life. The list becomes the law; the law becomes the terrain.

**Complication:** The list will never end, and someone must keep it.

**Local Objects:**
* **endless ledger** — an atlas of obligations.
* **ink-stone** — the tool with which it is written.

**Abolition:** The old cops do not return.

**What Becomes the New Cops:** The list itself, and those who interpret it.

---

## Inventory Items (Persistent)

* **star-map** — allows TRAVEL between nodes.
* **red sphere** — a portable anomaly; can be USED once to disable a surveillance device.
* **open-hand signal** — a gesture of peace and revolution. People recognize it.
* **note** — blank until you choose to leave it somewhere.

---

## Hints (Optional)

1. **You can’t win by overthrowing alone.** Seek the quiet infrastructure of care.
2. **Some places have no police.** Ask what fear looks like there.
3. **When you meet the Story-Machine, tell it your own ending.** It changes how you travel.
4. **The red sphere can be used once.** Choose a moment that matters.

---

## Ending: The Opening

When you have travelled enough, you may choose to **STAY**.

```
> STAY
```

You stop fleeing. You stop chasing the cops as a singular object. You begin to build the strange, everyday, patient architectures that make them unnecessary. This is not a final scene; it is a beginning in a quiet key.

The screen glows with one last prompt.

```
> 
```

---

## Designer’s Notes

This game is inspired by social science fiction and the long, spiraling story of Nebidita. It is about liberation as a process, not a victory screen. It is about the way institutions mutate, and the quiet work of building new worlds.

Play slowly. Speak softly. Revolt carefully.
