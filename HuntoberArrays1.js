function checkEquality(x, y) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      return x[i][j] === y[i][j] ? true : false;
    }
  }
}
//take each element in each array. Then take each value in that element and compare
const arr1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

const arr2 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const arr3 = [
  ["a", "B", "c"],
  ["d", "E", "f"],
  ["g", "H", "i"],
];
const arr4 = [
  ["a", "b", "c"],
  ["g", "h", "i"],
  ["d", "e", "f"],
];
checkEquality(arr1, arr2);
