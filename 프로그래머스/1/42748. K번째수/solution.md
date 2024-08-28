# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
무작위 순서로 주어진 숫자를 commands로 받은 `i`번째 부터 `j`번째 까지 자르고 정렬했을 때, `k`번째의 숫자를 구한다.

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법
> **sort** Algorithm( '정렬' )

1. **command의 요소들 구조 분해 할당**
   - 배열로 받은 command를 구조 분해 할당을 통해 활용하기 좋게 바꾸어 준다.
2. **commands 순회하면서 처리**
   - `i`번째 부터: `index`와 맞추기 위해서 `-1`을 해준다.
   - `j`번째 까지: 해당 숫자는 제거하지 않으므로 `j`를 그대로 쓴다.
   - 정렬했을 때: `sort`로 정렬한다.
   - `k`번째 숫자: `index`로 쓰기 위해 `-1`을 해준다.

### 👩‍💻 코드

```javascript
const solution = (array, commands) => {
  let result = [];
  commands.forEach(el => {
    // command 구조 분해 할당
    const [i, j, k] = el;
    // slice 로 자르기, sort 로 정렬, index는 `- 번째 -1` 과 같다.
    const filteredArray = (array.slice(i-1, j)).sort((a, b) => a - b);
    result.push(filteredArray[k-1])
  })

return result;
}
