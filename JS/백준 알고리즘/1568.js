testCase = require("fs").readFileSync("예제.txt").toString().trim();
testCase = Number(testCase);
let i = 0;
let answer = 0;
while (testCase > 0) {
  i++;
  if (testCase >= i) {
    testCase -= i;
    answer += 1;
  } else {
    i = 0;
  }
}
console.log(answer);
