// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

function maxCharacter(str) {
  let map = {};

  str.split("").forEach((element) => {
    map[element] ? map[element]++ : (map[element] = 1);
  });

  let values = Object.values(map);
  console.log(Math.max(...values));
}

maxCharacter("Hellow World!");
