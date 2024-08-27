const solution = (board, moves) => {
  const lanes = Array.from({ length: board.length }, () => []);
  let basket = [];
  let count = 0;

  board.forEach(el => {
    for(let i = 0; i < board.length; i ++){
      if(el[i] !== 0 ) lanes[i].push(el[i])
    }
  });
  
  moves.forEach(el => {
    const idx = el - 1;
    const picked = lanes[idx].shift();
      if(picked !== undefined) {
        if(basket.length > 0 && picked === basket[basket.length-1]){
          basket.pop();
          count += 2;
      } else basket.push(picked);
    }
  });
  
  return count;
}