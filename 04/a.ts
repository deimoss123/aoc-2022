const pairs = (await Deno.readTextFile('input.txt')).split('\r\n');

let total = 0;

for (const pair of pairs) {
  const [first, second] = pair.split(',');
  const [first1, first2] = first.split('-');
  const [second1, second2] = second.split('-');

  const isFirstInSecond = +first1 >= +second1 && +first2 <= +second2;
  const isSecondInFirst = +second1 >= +first1 && +second2 <= +first2;

  if (isFirstInSecond || isSecondInFirst) total++;
}

console.log(total);
