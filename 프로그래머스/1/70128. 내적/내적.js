function solution(a, b) {
    const answer = [...a].map((el, idx) => el*b[idx]);
    
    return answer.reduce((acc, cur) => acc + cur, 0)
}