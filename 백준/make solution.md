# 📚 백준 JavaScript 사용하기

```node
const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout,
});

let input = [];

readline
 .on('line', (line) => {
   // input 형태 변환 코드
   input = line... /* 변환 방법 */
   readline.close();
 })
 .on('close', () => {
   solution(input);
});

const solution = (input) => {
 // 풀이 코드 작성
 console.log(/* 정답 */)
};
```
