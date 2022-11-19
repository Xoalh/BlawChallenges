function averageLength(arr) {
  let average = arr.map((el) => el.length);
  average = Math.round(
    average.reduce((previousV, currentV) => previousV + currentV) /
      average.length
  );

  let answer = arr.map((el) => el[0].repeat(average));
  //console.log(answer);
}

//Refactor
function averageLength(arr) {
  let average = Math.round(
    arr.reduce((previousV, currentV) => previousV + currentV.length, 0) /
      arr.length
  );

  let answer = arr.map((el) => el[0].repeat(average));
  console.log(answer);
}
averageLength(["aa", "bb", "ddd", "eee"]);

//INput is an array and output is new array. average length: loop, take each length, average, round.
//putput use map. take each element and slice off average length

// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average
//length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1
