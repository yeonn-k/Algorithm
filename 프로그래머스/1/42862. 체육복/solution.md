# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
체육복을 도난당한 학생들이 여벌의 체육복을 가진 학생들에게 체육복을 빌려 최대한 많은 학생이 체육수업에 참여할 수 있도록 하는 문제.
체육복을 도난당한 학생들의 번호 목록, 여벌의 체육복을 가져온 학생들의 번호 목록을 활용해 체육 수업 참여 가능한 학생수의 **최댓값**을 구한다.

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법
> **greedy** Algorithm( 최댓값 )

1. **초기 상태 설정**
   - 도난당한 학생 수에서 체육복을 잃어버리지 않은 학생의 수를 초기 값으로 설정

2. **여벌 체육복을 가진 도난 피해 학생 처리**
   - 여벌 체육복을 가진 학생이 도난당한 학생 목록에 있으면 도난당한 학생 목록과 여벌을 가진 학생 목록에서 제외
   - 참여 가능한 학생 수 1 증가

3. **체육복 대여 처리**
   - 도난당한 학생의 번호를 기준으로 인접한 번호의 학생이 여벌 체육복을 가진 경우 해당 학생의 여벌 체육복을 빌려주고( 여벌을 가진 학생 목록에서 제외 ), 도난당한 학생 목록에서 제거
   - 참여 가능한 학생 수 1 증가

### 👩‍💻 코드

```javascript
const solution = (n, lost, reserve) => {
  // 체육복을 잃어버리지 않은 학생 = 수업에 참여할 수 있는 학생
  let answer = n - lost.length;
  
  // lost, reserve 정렬
  lost.sort();
  reserve.sort();
  
  // 여벌 체육복을 가진 학생이 도난당했을 경우 양쪽에서 제외( 빌릴 필요 없는 사람 ! )
  for(let i = 0; i < lost.length; i ++){
    if(reserve.indexOf(lost[i]) !== -1){
      reserve.splice(reserve.indexOf(lost[i]), 1);
      lost.splice(i, 1);
      answer ++;
      // idx 보정
      i --;
    }
  }
  
  for ( let i = 0; i < lost.length; i ++){
    // 앞 번호부터 확인
    if(reserve.includes(lost[i]-1)){
      reserve.splice(reserve.indexOf(lost[i]-1), 1);
      lost.splice(i, 1);
      answer ++;
      // idx 보정
      i --;
    }
    // 뒷 번호 확인
    if(reserve.includes(lost[i]+1)){
      reserve.splice(reserve.indexOf(lost[i]+1), 1);
      lost.splice(i, 1);
      answer ++;
      // idx 보정
      i --;
    }
  }
  
  return answer;
}
