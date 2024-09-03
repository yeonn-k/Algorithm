# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
N개의 평면 위의 점이 주어졌을 때, 좌표를 x 증가 순으로, x가 같을 경우 y 증가 순으로 정렬하기

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법
> 정렬 Algorithm

1. **readline 사용하여 input 처리**
2. **라인 별로 input 배열의 요소로 저장**
3. **N 제외하기**
4. **공백으로 구분하여 배열로 변환 후 모든 요소 숫자로 변환**
5. **모든 요소를 x 기준으로 정렬하고 x값이 같을 경우 y 기준으로 정렬**
6. **공백을 기준으로 결합 후 다시 개행 기준으로 결합하여 하나의 문자열로 변환**

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
    // 'N' 제외하기
    input.shift();
    // 공백으로 구분하여 배열로 변환하고 각 요소 모두 숫자로 변환
    const arr = input.map((el) => el.split(" ").map(Number));

    // 모든 요소를 x(0번째 요소) 기준으로 오름차순 정렬하고 x값이 같을 경우 y(1번째 요소)로 오름차순 정렬
    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // 요소들을 공백을 기준으로 결합하고 다시 개행을 기준으로 결합하여 하나의 문자열로 변환
    const result = arr.map((el) => el.join(" ")).join(`\n`);
    console.log(result);
  });
```
