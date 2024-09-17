# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성하기

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법

1. **짝을 이루는 인덱스 별로 구분하여 곱한 값 배열에 담기**
   - 매개변수로 각각의 요소와 요소의 인덱스를 활용한 `map`으로 곱한 값을 담는 배열을 만든다.
2. **만들어진 배열의 모든 값의 합계 구하기**

### 👩‍💻 코드

```javascript
function solution(a, b) {
    // 각 요소와 index를 전달 받은 map을 활용해 answer 배열 만들기
    const answer = [...a].map((el, idx) => el*b[idx]);

    // answer 배열의 모든 요소 합계 구하기
    return answer.reduce((acc, cur) => acc + cur, 0)
}
```

### 📖 다른 사람 풀이
```javascript
const solution = ( a, b ) => {
   // _: 해당 매개 변수 생략( 사용하지 않는 경우 )
	return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
```

