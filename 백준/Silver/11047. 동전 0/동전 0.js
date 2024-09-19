const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    let answer = 0;
    const [N, K] = input[0].split(" ");
    input.shift();

    const units = input.map((el) => parseInt(el));
    units.sort((a, b) => b - a);

    let total = parseInt(K);

    for (let i = 0; i < units.length; i++) {
      if (total >= units[i]) {
        let count = Math.floor(total / units[i]);
        answer += count;
        total = total - units[i] * count;
      }
    }

    console.log(answer);
  });