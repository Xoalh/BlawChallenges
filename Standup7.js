function solve(arr) {
  let setArray = arr
    .map((el) => [...new Set(el)].length)
    .reduce((initial, accum) => initial * accum);
  console.log(setArray);
}
solve([[1, 2], [4], [5, 6, 6]]);

// const numbers = [2, 3, 3, 3, 4, 5, 6, 6, 7,];
// console.log([...new Set(numbers)]);
