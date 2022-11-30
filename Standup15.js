// function dup(text) {
//   let editedText = text.map((word) => {
//     let individualWord = word.split("");
//     //console.log(individualWord);
//     for (let i = 1; i < individualWord.length; i++) {
//       if (individualWord[i] === individualWord[i - 1]) {
//         individualWord.splice(i, 1);
//         //console.log(individualWord);
//       }
//     }
//     return individualWord.join("");
//   });

//   console.log(editedText);
// }

// function dup(text) {
//   let answer = text.map((word) => {
//     word.split("").filter((el, index) => (el === el[index + 1] ? "" : el));
//   });
//   console.log(answer);
// }

function removeDupes(arr) {
  return arr.map((word) =>
    word
      .split("")
      .filter((l, i, arr) => l !== arr[i - 1])
      .join("")
  );
}

console.log(removeDupes(["ccoooooodddddewaaarrrrrrr", "ddkelees"]));

//dup(["abracadabra", "allottee", "assessee"]); // = ["abracadabra","alote","asese"].

//dup(["kelless", "keenness"]); // = ["keles","kenes"].

//dup(["ccooddddddewwwaaaaarrrrsssss", "kelless"]);

//dup(["dddddd"]);
//Remove consecutive duplicate letters from each string in the array.
//input is array and so is output. First loop is through array. Second is through each word and looking to see a letter is identical to the next. if yes, remove it.
//"abracadabra",

//dddddd => does d1 = d0, yes. delete d1. does d2 = d1, yes delete d2.
