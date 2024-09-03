# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
수 N개가 주어졌을 때, 오름차순 후 앞에서 부터 K번째 수 구하기

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법
> 정렬 Algorithm

1. **readline 사용하여 input 처리**
2. **매개변수 input을 필요한 형태로 변환하여 전달**
3. **각 요소를 공백을 기준으로 구분하여 배열로 변환**
4. **K 할당, 오름차순 정렬**
5. **index 활용하여 K번째 숫자 찾기**

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
    // 각 배열에서 공백을 기준으로 구분하여 배열로 변환
    const arr = input.map((el) => el.split(" "));
    // K 선언 및 할당
    const k = arr[0][1];
    // 두 번째 배열( input 2번째 줄 ) 각 요소를 숫자로 변환 후 오름차순 정렬
    const numbers = arr[1].map((el) => parseInt(el)).sort((a, b) => a - b);

    // 정렬된 배열에서 index를 이용해 k번째 수( index이므로 -1 ) 찾기
    console.log(numbers[k - 1]);
  });
```
