function whatever(arr, num) {
  arr.sort((a, b) => a - b);
  console.log(arr[num - 1]);
}

//whatever([2, 4, 5, 1, -3, 7, 8], 4);
whatever([15, 20, 7, 10, 4, 3], 3);
