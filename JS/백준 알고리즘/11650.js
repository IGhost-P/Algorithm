// 좌표 정렬하기
[testCase, ...locat] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
newlocat = locat
  .map((el) => el.split(" ").map(Number))
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  .map((el) => el[0] + " " + el[1]);
console.log(newlocat.join("\n"));
