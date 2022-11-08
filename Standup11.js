function findDeletedNumber(arr, mixArr) {
  let answer = [];

  if (arr.length == 0 || mixArr.length == 0) {
    console.log(0);
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!mixArr.includes(arr[i])) {
        answer.push(arr[i]);
      } else {
        answer.push(0);
      }
      answer = answer.sort((a, b) => b - a);
      console.log(answer[0]);
    }
  }
}

function findDeletedNumber(arr, mixArr) {
  //   let answer = arr.filter((el) => mixArr.indexOf(el) === -1)[0] || 0;
  let arrSum = arr.reduce((a, b) => a + b, 0);
  console.log(arrSum);
}

findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 2, 4, 6, 7, 8, 1, 9]);
//findDeletedNumber([], [1, 2, 3]);

// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

//     The starting array sequence is [1,2,3,4,5,6,7,8,9]
//     The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
//     Your function should return the int 5.

// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

//Input is two arrays. output is single digit that comes from mixed array. Take the mixed array and for each entry ask if it is in the original. If not, output that array. if all true,
//output is 0
