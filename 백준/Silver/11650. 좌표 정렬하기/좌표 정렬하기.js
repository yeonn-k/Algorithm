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
    input.shift();
    const arr = input.map((el) => el.split(" ").map(Number));

    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    const result = arr.map((el) => el.join(" ")).join(`\n`);
    console.log(result);
  });