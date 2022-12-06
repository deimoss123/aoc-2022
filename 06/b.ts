const input = await Deno.readTextFile('./input.txt');
const chars = input.split('');

for (let i = 14; i <= chars.length; i++) {
  const set = new Set(chars.slice(i - 14, i));
  if (set.size === 14) {
    console.log(i);
    break;
  }
}
