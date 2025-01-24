function solution(arr, n) {
    var answer = [];
    
    const length = arr.length;
    
    if(length % 2 === 0) {
        //arr[0] + n, arr[even] + n
        answer = arr.map((num, idx) => (
            idx % 2 === 0 ? num : num + n
        ))
    }else {
        // arr[odd] + n
        answer = arr.map((num, idx) => (
            idx % 2 !== 0 ? num : num + n 
    ))
    }
    
    return answer;
}