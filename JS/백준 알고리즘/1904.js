// 01 타일

input = require("fs").readFileSync("예제.txt").toString().trim();
input = Number(input);

const DP = (num) => {
  let dpList = new Array(num + 1).fill(0).map((_, v) => v);
  dpList[1] = 1;
  dpList[2] = 2;

  for (let i = 3; i <= num; i++) {
    dpList[i] = (dpList[i - 1] + dpList[i - 2]) % 15746;
  }
  return dpList[num];
};
console.log(DP(input));
