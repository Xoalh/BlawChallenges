//Two Sum
function twoSum(arr, total) {
  let answer = [];
  let map = [];

  for (let num of arr) {
    let half = total - num;
    if (map.indexOf(half) !== -1) {
      console.log(map.indexOf(half));
      answer.push([half, num]);
    } else {
      map.push(num);
    }
  }
  console.log(answer);
  console.log(map);
}

twoSum([1, 2, 2, 3, 4], 4);

//twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]

//half = 4 - 1 = 3
//if 3 *is* in map, push to answer 1 and 3
//if 3 is NOT in map, push it to map
//
