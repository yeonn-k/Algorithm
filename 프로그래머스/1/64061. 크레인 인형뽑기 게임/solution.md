# ✏️ 문제 풀이 방법
<br>

## 📋 문제 설명
n*n 크기의 게임 바구니와 뽑은 인형이 들어가는 바구니가 있다. <br>
왼쪽 부터 1, 2, 3... 로 번호가 정해진 게임 바구니에서 moves 로 받은 칸의 인형을 뽑는다. <br>
인형이 없을 경우 아무 일도 일어나지 않고 뽑은 인형은 바구니에 들어간다. <br>

동일한 인형이 연속해서 쌓이면 두 인형은 바구니에서 사라진다.

<br />

## ❓ 문제 풀이

### ❗️ 접근 방법
> **stack** Algorithm( "쌓여 있다", LIFO )

1. **게임 바구니 초기화**
   - 빈 배열이 게임 바구니 길이 만큼 담긴 배열 생성
     
2. **게임 바구니에 인형 담기**
   - 인덱스를 이용하여 각 인형을 올바른 레인에 담음
  
3. **인형 뽑기 및 뽑은 인형 처리**
   - 인덱스를 활용하여 인형을 뽑고
     - 인형이 없을 경우 아무런 일도 발생하지 않음
     - 인형이 있는 경우
       - 인형과 다른 경우: 바구니에 인형 추가
       - 인형과 동일할 경우: 바구니에서 인형 제거, 사라진 인형 수 +2

### 👩‍💻 코드

```javascript
const solution = (board, moves) => {
  // board 배열의 길이와 같은 길이의 새로운 배열 lanes를 생성하고, 각 요소를 빈 배열로 초기화
  const lanes = Array.from({ length: board.length }, () => []);
  let basket = [];
  let count = 0;

  board.forEach(el => {
    // 인형이 없음을 의미하는 0은 제외하고 idx를 이용해 각각 알맞는 lane에 넣는다.
    for(let i = 0; i < board.length; i ++){
      if(el[i] !== 0 ) lanes[i].push(el[i])
    }
  });
  
  moves.forEach(el => {
    const idx = el - 1;
    const picked = lanes[idx].shift();
      // 인형이 있는 경우
      // undefined = 뽑기로 인형이 이미 다 나간 경우 !
      if(picked !== undefined) {
        // basket에 인형이 있고, 새로 잡은 인형이 마지막 인형과 동일한 경우
        if(basket.length > 0 && picked === basket[basket.length-1]){
          // 기존의 인형을 꺼낸다. 두 개의 인형이므로 count +2
          basket.pop();
          count += 2;
      } // 그 외의 경우 인형을 바구니에 넣는다.
        else basket.push(picked);
    }
  });
  
  return count;
}
