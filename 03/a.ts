const rucksacks = (await Deno.readTextFile('input.txt')).split('\r\n');

let total = 0;

for (const r of rucksacks) {
  const first = r.slice(0, r.length / 2);
  const second = r.slice(r.length / 2, r.length);

  const set1 = Array.from(new Set(first.split('')));
  const set2 = Array.from(new Set(second.split('')));

  for (const char of set1) {
    const inCommon = set2.find(c => c === char);
    if (!inCommon) continue;

    let charCode = inCommon.charCodeAt(0) - 96;
    if (charCode < 0) charCode += 58;

    total += charCode;
  }
}

console.log(total);
