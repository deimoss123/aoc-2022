const pairs = (await Deno.readTextFile('input.txt')).split('\r\n');

let total = 0;

for (const pair of pairs) {
  const [first, second] = pair.split(',');
  const [first1, first2] = first.split('-');
  const [second1, second2] = second.split('-');

  if (+first2 >= +second1 && +second2 >= +first1) total++;
}

console.log(total);
