# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
정수 배열을 받아 서로 다른 인덱스의 두개의 수를 더해 만드는 모든 수를 배열에 담아 오름차순으로 정렬 하여 반환한다.

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법

1. **결과를 담을 result 초기화**
   - 빈 배열 result 생성
2. **numbers 순회하며 더한 값 push**
   - 배열 numbers를 순회하며 각 index 별로 더한 모든 값을 result에 추가
3. **중복 제거 및 정렬**
   - set을 활용하여 중복 숫자를 제거하고 sort로 정렬해서 반환

### 👩‍💻 코드

```javascript
const solution = (numbers) => {
  // result 초기화
  let result = [];

  // numbers 배열을 순회하며 index 별로 더한 모든 경우의 수 result에 push
  for(let i = 0; i < numbers.length-1; i ++){
    for(let j = i + 1; j < numbers.length; j++){
      result.push(numbers[i]+numbers[j]);
    };
  };

  // set으로 중복값을 제거하고 sort로 정렬하여 반환
  return [...new Set(result)].sort((a, b) => a - b);
};
