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
    const arr = input.map((el) => el.split(" "));
    const k = arr[0][1];
    const numbers = arr[1].map((el) => parseInt(el)).sort((a, b) => a - b);

    console.log(numbers[k - 1]);
  });
