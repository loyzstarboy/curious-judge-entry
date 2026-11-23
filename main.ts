// Entry for make.fun's "Make the AI judge feel curious" bounty.
// The program writes one short text to /output/entry.txt.
//
// Revision note: the first draft used a lighthouse keeper, a familiar
// storybook image. The judge's brief weighs freshness, so the final text
// keeps the same structure (a calm, concrete scene; a final line that
// reframes it) but with a stranger, more original image: a woman watering
// a plant that died six years ago. Her last line turns the dead plant
// from an object of grief into a mystery with a future, which is what
// keeps the reader asking after the last line.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "Every morning, the woman on the third floor waters a plant that died six years ago. The neighbours stopped asking why. She only smiles and says, 'It hasn't told me yet what it was trying to become.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
