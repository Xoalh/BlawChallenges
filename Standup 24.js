// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

function fiboNacci(n) {
  let n1 = 0;
  let n2 = 1;
  let sequence = [];
  for (let i = 0; i < n; i++) {
    //console.log(n1);
    sequence.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(sequence[n - 1] + sequence[n - 2]);
}

fiboNacci(11); //10 + 9 = 55+34
//n = 4, 1+2 = 3
// 0, 1, 1    , 2   , 3, 5, 8, 13, 21

// 0, 1, 1 + 0, 1+1, 2+1, 2+3
