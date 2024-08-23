const solution = (array, commands) => {
  let result = [];
  commands.forEach(el => {
    const [i, j, k] = el;
    const filteredArray = (array.slice(i-1, j)).sort((a, b) => a - b);
    result.push(filteredArray[k-1])
  })

return result;
}