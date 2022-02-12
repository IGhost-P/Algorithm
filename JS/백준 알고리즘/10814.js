[testCase, ...members] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
const newMembers = members.map((el) => el.split(" "));
const answer = newMembers.sort((a, b) => a[0] - b[0]);
console.log(answer.map((el) => el[0] + " " + el[1]).join("\n"));
