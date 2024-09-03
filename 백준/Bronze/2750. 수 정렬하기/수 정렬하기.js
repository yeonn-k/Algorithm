const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let input = [];

readline
  .on('line',(line) => {
  input.push(line)
})
.on('close', () => {
  solution(input);
});

const solution = (input) => {
  input.shift()
  const result = input.map(el => parseInt(el));
  
  console.log(result.sort((a, b) => a - b).join(`\n`));
}