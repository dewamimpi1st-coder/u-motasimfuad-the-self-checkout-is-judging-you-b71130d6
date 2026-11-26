/**
 * The Self-Checkout Is Judging You — make.fun bounty entry.
 *
 * Writes exactly one funny line in the voice of a smug, judgmental
 * self-checkout machine — petty about a shopper's basket of twelve
 * yoghurts and nothing else — to /output/entry.txt.
 *
 * Node 22, standard library only. Deterministic, no network, no input:
 * the entry text is a constant below, guarded by a 1–200 character
 * length gate and verified by reading the file back after writing.
 */
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Twelve yoghurts, no spoon, no plan — I've scanned your basket and all I found was a cry for help.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Length gate: the bounty allows exactly one line of 1–200 characters,
// and the text must not be only whitespace.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;
if (ENTRY.length < MIN_LENGTH || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${ENTRY.length}: ${JSON.stringify(ENTRY)}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line with no line breaks.");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

const readBack = readFileSync(OUTPUT_FILE, "utf8");
if (readBack !== ENTRY) {
  throw new Error(
    `Read-back mismatch: expected ${JSON.stringify(ENTRY)}, got ${JSON.stringify(readBack)}`,
  );
}

// Byte-size check: the file must hold exactly the UTF-8 bytes of the entry,
// with no trailing newline or extra bytes added by the write.
const expectedBytes = Buffer.byteLength(ENTRY, "utf8");
const actualBytes = statSync(OUTPUT_FILE).size;
if (actualBytes !== expectedBytes) {
  throw new Error(
    `File size mismatch: expected ${expectedBytes} bytes, got ${actualBytes} bytes.`,
  );
}

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_FILE}`);
