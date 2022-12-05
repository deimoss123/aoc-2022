const [crateInput, moveInput] = (await Deno.readTextFile('input.txt')).split('\r\n\r\n');

const crateLines = crateInput.split('\r\n');
const stackCount = crateLines.at(-1)!.trim().split(/\s+/).length;

const stacks: string[][] = Array.from({ length: stackCount }, () => []);

for (const line of crateLines.reverse().slice(1)) {
  for (let i = 0; i < stackCount; i++) {
    const char = line.at(i * 4 + 1)!;
    if (char !== ' ') stacks[i].push(char);
  }
}

for (const move of moveInput.split('\r\n')) {
  const split = move.split(' ');

  const count = +split[1]!;
  const from = +split[3]! - 1;
  const to = +split[5]! - 1;

  stacks[to].push(...stacks[from].splice(-count).reverse());
}

const res = stacks.reduce((p, c) => p + c.at(-1), '');
console.log(res);
