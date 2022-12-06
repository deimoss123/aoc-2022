const input = await Deno.readTextFile('./input.txt');
const chars = input.split('');

for (let i = 4; i <= chars.length; i++) {
  const set = new Set(chars.slice(i - 4, i));
  if (set.size === 4) {
    console.log(i);
    break;
  }
}
