// 분해합
test_case = require("fs").readFileSync("예제.txt").toString();
test_case = Number(test_case);
var answer = false;
for (let i = 1; i < test_case; i++) {
  let total = String(i);
  let sum = 0;
  sum += i;
  for (let each in total) {
    sum += Number(total.at(each));
  }
  if (test_case == sum) {
    answer = true;
    return console.log(i);
  }
}
if (!answer) return console.log(0);
