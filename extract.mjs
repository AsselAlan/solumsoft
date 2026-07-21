import fs from 'fs';

const data = fs.readFileSync('c:/Users/Alan/Desktop/Solum-Web/.kombai/canvas/solum_sf.canvas', 'utf-8');
const lines = data.split('\n');
const jsonStartIndex = lines.findIndex(line => line.trim().startsWith('{'));
const jsonString = lines.slice(jsonStartIndex).join('\n');

try {
  const parsed = JSON.parse(jsonString);
  const variant3 = parsed.nodes.var_17d66e09beac;
  if (variant3 && variant3.html) {
    fs.writeFileSync('c:/Users/Alan/Desktop/Solum-Web/variant3.html', variant3.html);
    console.log('Variant 3 extracted to variant3.html');
  } else {
    console.log('Variant 3 not found in JSON nodes.');
  }
} catch (e) {
  console.error('Failed to parse or extract:', e);
}
