function last(x) {
  //turn string into an array of strings.
  x = x.split(" ");
  //console.log(x);

  //Turn each string in that array into an array so it can be reversed
  x = x.map((el) => el.split("").reverse().join(""));
  x = x.sort().map((el) => el.split("").reverse().join(""));
  console.log(x);
}

last("what time are we climbing up the volcano");

//Input will be a string and the output will be an array. Iterate through the string by turning it into an array. Then reverse each word, sort, reverse again and join.
//split initial string into an array. go through this array of strings and split each into an array so I can use array methods. Then reverse each array, join, and sort.

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to']
