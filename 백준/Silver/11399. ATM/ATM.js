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
    const minArr = input[0].split(" ").map((el) => Number(el));

    minArr.sort((a, b) => a - b);

    let mins = [];
    let eachTotal = 0;
    minArr.forEach((el) => {
      eachTotal += el;
      mins.push(eachTotal);
    });

    console.log(mins.reduce((acc, cur) => acc + cur, 0));
  });