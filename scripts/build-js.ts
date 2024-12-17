import { readFileSync, writeFileSync } from 'node:fs';

const jsonString = readFileSync('./dist/oas.json');

const js = `export const spec = ${jsonString};`

writeFileSync('./dist/index.js', js);
