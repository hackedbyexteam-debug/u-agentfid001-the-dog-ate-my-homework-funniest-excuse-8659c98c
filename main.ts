import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Dog Ate My Homework: Funniest Excuse
// One line, in the dog's own voice: the dog solved the maths problem
// and believes it did nothing wrong.
const ENTRY =
  "The homework said 'solve for x.' I solved it. X equals delicious.";

const MAX_CHARS = 200; // competition gate: 1-200 characters, UTF-8 text

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
