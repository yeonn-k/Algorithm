const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', (line) => {
    input = line.split(' ');
    readline.close();
  })
  .on('close', () => {
    solution(input);
});

const solution = (input) => {
  let result = [];

  input.forEach(el => {
    result.push(parseInt(el));
  });
  
  result.sort((a, b) => a - b); 
  console.log(result.join(' ')); 
}