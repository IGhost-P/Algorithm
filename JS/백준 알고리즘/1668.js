// 트로피 진열
[testCase, ...arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let left = 1;
let right = 1;
let left_max = 100;
let right_max = 100;

re_arr = [...arr].reverse();
max = Math.max(arr);
prvArr = [arr[0]];
for (let i = 0; i < arr.length; i++) {
  prvMax = Math.max(...prvArr);
  if (prvMax < arr[i] && arr.includes(arr[i])) {
    prvArr.push(arr[i]);
  }
}

re_prvArr = [re_arr[0]];
for (let i = 0; i < arr.length; i++) {
  prvMax = Math.max(...re_prvArr);
  if (prvMax < re_arr[i] && arr.includes(re_arr[i])) {
    re_prvArr.push(re_arr[i]);
  }
}

// console.log(prvArr.length, re_prvArr.length);
