const solution = (s) => {
  let upper = [];
  let lower = [];
  
  [...s].forEach(el => {
    el === el.toUpperCase() ? upper.push(el) : lower.push(el);
  })
  
  return lower.sort().reverse().join('') + upper.sort().reverse().join('')
};