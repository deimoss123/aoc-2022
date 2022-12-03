const rucksacks = (await Deno.readTextFile('input.txt')).split('\r\n');

let total = 0;

for (let i = 0; i < rucksacks.length; i += 3) {
  const sets = [
    Array.from(new Set(rucksacks[i])),
    Array.from(new Set(rucksacks[i + 1])),
    Array.from(new Set(rucksacks[i + 2])),
  ];

  const obj: Record<string, number> = {};
  let inCommon = '';

  for (const set of sets) {
    for (const char of set) {
      obj[char] = obj[char] ? obj[char] + 1 : 1;
      if (obj[char] === 3) {
        inCommon = char;
        break;
      }
    }
  }

  let charCode = inCommon.charCodeAt(0) - 96;
  if (charCode < 0) charCode += 58;

  total += charCode;
}

console.log(total);
