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

console.log(Math.max(...caloriesPerElf));
