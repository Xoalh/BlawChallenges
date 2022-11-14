function findMiddleElement(arr) {
  let sum = arr.reduce((accum, initial) => accum + initial) / arr.length;
  let element = Math.round(sum);
  console.log(arr.indexOf(element));
}

findMiddleElement([5, 10, 14]);
findMiddleElement([2, 3, 1]);
//Input is an array, output is single number. Try adding, dividing by length. round up

//Instructions

// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
