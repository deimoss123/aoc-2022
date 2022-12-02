const rounds = (await Deno.readTextFile('input.txt')).split('\r\n');

const rightToAbc: Record<string, string> = {
  X: 'A', // rock
  Y: 'B', // paper
  Z: 'C', // scissors
};

// 0 - lose, 3 - draw, 6 - win
function getResultOfMatch(left: string, right: string) {
  if (rightToAbc[right] === left) return 3;

  if (
    (left === 'B' && right === 'X') ||
    (left === 'C' && right === 'Y') ||
    (left === 'A' && right === 'Z')
  ) {
    return 0;
  }

  return 6;
}

const score = rounds.reduce(
  (p, c) =>
    p +
    getResultOfMatch(...(c.split(' ') as [string, string])) +
    Object.keys(rightToAbc).indexOf(c.split(' ')[1]) +
    1,
  0
);

console.log(score);
