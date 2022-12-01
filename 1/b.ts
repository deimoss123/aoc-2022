const calories = (await Deno.readTextFile('input.txt')).split('\r\n');

let total = 0;
const caloriesPerElf: number[] = [];

for (const c of calories) {
  if (c === '') {
    caloriesPerElf.push(total);
    total = 0;
  } else {
    total += +c;
  }
}

caloriesPerElf.push(total);

const topThree = caloriesPerElf.sort((a, b) => b - a).slice(0, 3);
const res = topThree.reduce((p, c) => p + c, 0);

console.log(res);
