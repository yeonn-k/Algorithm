# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하기

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법
> 정렬 Algorithm

1. **readline 사용하여 input 처리**
2. **매개변수 input을 필요한 형태로 변환하여 전달**
3. **input에서 N의 개수 제외**
4. **숫자로 변환하여 정렬 후 개행으로 구분된 스트링으로 변환하여 반환**

### 👩‍💻 코드

```node
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
    solution(input);
  });

const solution = (input) => {
  // 수의 개수 'N' 제외
  input.shift();
  // 모든 요소 숫자로 변환
  const result = input.map((el) => parseInt(el));

  // 요소를 오름차순으로 정렬한 뒤 개행으로 구분된 문자열로 변환
  console.log(result.sort((a, b) => a - b).join(`\n`));
};
```


