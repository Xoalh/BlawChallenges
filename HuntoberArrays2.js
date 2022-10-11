function moveLeft(arg, arr) {
  let argIndex = arr.indexOf(arg);

  if (arr.indexOf(arg) != 0) {
    arr.splice(argIndex, 1);
    arr.splice(0, 0, arg);
  } else {
    return arr;
  }
}

function moveRight(arg, arr) {
  let argIndex = arr.indexOf(arg);

  if (arr.indexOf(arg) != arr.length - 1) {
    arr.splice(argIndex, 1);

    arr.push(arg);
  } else {
    return arr;
  }
}

myArray = ["abc", "xyz", 1, 2, "Hey!"];

//moveLeft("2", myArray);
moveRight(2, myArray);

//PREP find the arg. if index = 0, do nothing. If index != 0, delete it. Add arg to arr.
