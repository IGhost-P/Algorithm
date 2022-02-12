[n, ...testCase] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let oper = [];
let answer = [];
let flag = false;
const newOper = (n, arr) => {
  if (n == 0) {
    oper.push(arr);
  } else {
    // console.log("?", n);
    n -= 1;
    newOper(n, [...arr, " "]);
    newOper(n, [...arr, "+"]);
    newOper(n, [...arr, "-"]);
  }
};

testCase.forEach((el) => {
  newOper(el - 1, []);
  //   console.log(oper);
  oper.forEach((vArr) => {
    let string = "";
    vArr.map((v, i) => {
      string += i + 1 + v;
    });
    string += el;
    if (eval(string.replaceAll(" ", "")) == 0) {
      answer.push(string);
      flag = true;
    }
  });
  if (flag) {
    answer.push(" ");
  }
  oper = [];
});
answer.pop();
console.log(answer.join("\n"));
