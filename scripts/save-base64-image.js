const fs = require('fs');
const path = require('path');

// Base64 data from data URL (the part after "base64,")
const base64Data = process.env.BASE64_IMAGE;
if (!base64Data) {
  console.error('Set BASE64_IMAGE env var with the base64 string');
  process.exit(1);
}

const buffer = Buffer.from(base64Data, 'base64');
const outPath = path.join(__dirname, '../public/xMapper/XMapper-1.webp');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, buffer);
console.log('Saved to', outPath);
