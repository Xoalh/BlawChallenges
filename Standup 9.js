function stringConversion(str) {
  let answer = [];
  str = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      answer.push("(");
    } else {
      answer.push(")");
    }
  }
  console.log(answer.join(""));
}

function stringConversionRefactor(str) {
  let answer = str
    .toLowerCase()
    .split("")
    .map((el) => {
      return str.indexOf(el) === str.lastIndexOf(el) ? "(" : ")";
    })
    .join("");
  console.log(answer);
}

stringConversionRefactor("recede");
stringConversionRefactor("(( @");
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only
// once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

//Input is a string and output is a string. Take the string, make lower case, split it into an array and check if the index of a character is equal to its last index. If yes, use "("
// ")" if not.
