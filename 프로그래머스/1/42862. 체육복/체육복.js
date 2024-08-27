const solution = (n, lost, reserve) => {
  let answer = n - lost.length;
  
  lost.sort();
  reserve.sort();
  
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
    if(reserve.includes(lost[i]-1)){
      reserve.splice(reserve.indexOf(lost[i]-1), 1);
      lost.splice(i, 1);
      answer ++;
      // idx 보정
      i --;
    }
    if(reserve.includes(lost[i]+1)){
      reserve.splice(reserve.indexOf(lost[i]+1), 1);
      lost.splice(i, 1);
      answer ++;
      // idx 보정
      i --;
    }
  }
