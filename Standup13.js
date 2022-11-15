// function sortOdds(arr) {
//   let odds = arr.filter((el) => el % 2 != 0);
//   console.log(odds);
//   let oddsSorted = odds.sort((a, b) => a - b);
//   console.log(oddsSorted);
//   console.log(arr.indexOf(odds[0]));
//   console.log(arr.indexOf(5));
// }

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  console.log(odd);
  console.log(array.map((x) => (x % 2 ? odd.shift() : x)));
}

//sortOdds([1, 7]);
sortArray([5, 8, 6, 3, 4]);
//sortOdds([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

//If element is odd, put into new array, then sort. take original array, look for indexof first odd and insert sorted odd
//indexOf "3" is 3 in original array
