# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
문자를 큰 것부터 작은 순으로 정렬하여 리턴한다. 이 때 대문자는 소문자보다 작은 것으로 간주.

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법
> **정렬** Algorithm(  )

1. **대소문자 배열 초기화**
   - 대소문자를 구분하여 담을 배열 초기화
2. **문자열 순회하며 대소문자 구분**
   - 삼항연산자를 활용하여 대소문자를 구분하여 각각 알맞는 배열에 담는다.
3. **큰 것부터 정렬하여 합치기**

### 👩‍💻 코드

```javascript
const solution = (s) => {
  // 대소문자 배열 초기화
  let upper = [];
  let lower = [];

  // 문자열을 순회하며
  [...s].forEach(el => {
  // 대소문자를 구분하여 각각의 배열에 담음
    el === el.toUpperCase() ? upper.push(el) : lower.push(el);
  })

  // sort 로 정렬, 큰 것 부터 이므로 reverse, join으로 하나의 문자열로 만들기, 문자열 두개 +
  return lower.sort().reverse().join('') + upper.sort().reverse().join('')
};
