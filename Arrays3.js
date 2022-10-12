// function movingStrings(arr) {
//   let aArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes("a")) {
//       aArray.push(arr[i]);
//       arr.splice(i, 1);
//     }
//   }

//   let lengthArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 3) {
//       lengthArray.push(arr[i]);
//       arr.splice(i, 1);
//     }
//   }
//   arr = aArray.concat(arr);
//   arr = arr.concat(lengthArray);
//   console.log(arr);
// }

function movingStrings(arr) {
  let aArray = arr.filter((x) => x.includes("a"));
  arr = arr.filter((x) => !x.includes("a"));
  let lengthArray = arr.filter((x) => x.length > 3);
  arr = arr.filter((x) => x.length <= 3);

  arr = aArray.concat(arr);
  arr = arr.concat(lengthArray);
  console.log(arr);
}

myArr = ["hi", "hello", "howdy", "hola", "hej", "hallo", "heyyy"];
movingStrings(myArr);
