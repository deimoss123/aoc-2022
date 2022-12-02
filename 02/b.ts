const rounds = (await Deno.readTextFile('input.txt')).split('\r\n');

// X - lose
// Y - draw
// Z - win

const points: Record<string, number> = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
};

// left - loser
// right - winner
const winCondition = [
  ['A', 'B'],
  ['B', 'C'],
  ['C', 'A'],
];

function calcPoints(left: string, command: string) {
  // win
  if (command === 'Z') {
    return 6 + points[winCondition.find(([a]) => a === left)![1]];
  }

  // draw
  if (command === 'Y') {
    return 3 + points[left];
  }

  // lose
  return points[winCondition.find(([, a]) => a === left)![0]];
}

const score = rounds.reduce((p, c) => p + calcPoints(...(c.split(' ') as [string, string])), 0);
console.log(score);
