const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 1. Update technologies.ts
const techPath = 'src/data/technologies.ts';
let techContent = fs.readFileSync(techPath, 'utf-8');

// We need to parse and modify technologies.ts. Since it's a TS array, let's use regex to remove objects, or just do string replacements.
// But writing a regex to remove an entire object is risky.
// Better approach: use a node script that transpiles it or parses it, or just use regex carefully.
