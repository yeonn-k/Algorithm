# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
문자를 큰 것부터 작은 순으로 정렬하여 리턴한다. 이 때 대문자는 소문자보다 작은 것으로 간주.

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법
> **정렬** Algorithm(  )

1. **readline 사용하여 입력 처리**
2. **매개변수 input을 필요한 형태로 변환해서 전달**
3. **빈 배열 result 초기화**
4. **input 배열을 순회하면서 숫자 변환하여 result push**
5. **input 배열 오름차순 정렬 후 올바른 출력 값 형태로 변환하여 반환**


### 👩‍💻 코드

```node
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', (line) => {
    // 입력 받은 문자열 공백 기준으로 잘라서 배열로 변환
    input = line.split(' ');
    readline.close();
  })
  .on('close', () => {
    solution(input);
});

const solution = (input) => {
  let result = [];

  input.forEach(el => {
    // input의 각 요소 숫자로 변환 후 배열에 추가
    result.push(parseInt(el));
  });

  // 오름차순 정렬
  result.sort((a, b) => a - b);
  // 정렬된 배열 ' '( 공백 )으로 구분된 문자열로 변환하여 반환
  console.log(result.join(' ')); 
}
