const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

var ransomNote = function (note, magazine) {
  let map = {};
  let mappedMagazine = magazine.split(" ");
  for (let word of mappedMagazine) {
    if (!map[word]) {
      map[word] = 1;
    } else if (map[word]) {
      map[word++];
    }
  }
  note = note.split(" ");
  for (let word of note) {
    if (!map[word]) {
      return false;
    } else {
      map[word]--;
    }
  }
  return true;
};

// function ransomNote(note, magazine) {
//   let ransom = note.split(" ");
//   for (let i = 0; i < ransom.length; i++) {
//     if (magazine.includes(ransom[i])) {
//       let start = magazine.indexOf(ransom[i]);
//       let amount = ransom[i].length + start;
//       console.log(magazine.slice(start, amount));
//     }
//   }
// }

console.log(ransomNote("sit ad est love", magazine));
console.log(ransomNote("sit ad est sint in in in in", magazine));
// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });
