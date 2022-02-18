[testCase, ...xy] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
let answer;
let answerList = [];

for (let i = 0; i < testCase; i++) {
  answer = xy[i].split(" ");
  answerList.push(answer);
}
console.log(
  answerList
    .sort((a, b) => {
      if (a[1] == b[1]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    })
    .map((el) => el.join(" "))
    .join("\n")
);
