// 2457 : 공주님의 정원
/**
 * 1월 부터 가장 긴걸 선택하고, 남은것중 가장 긴것씩 선택하면 될듯?
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
N = Number(N);
arr = arr.map((el) => el.split(" ").map((el) => Number(el)));

const make4 = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
      str += "-";
    }
    if (Math.floor(arr[i] / 10) === 0 && Number(arr[i]) !== 10) {
      str += "0" + arr[i];
    } else {
      str += arr[i];
    }
  }
  return str;
};

const checkStartAble = (str, endDay) => {
  const [start, end] = str;
  const startNum = Number(start);

  if (startNum <= Number(endDay)) {
    return true;
  }
  return false;
};

const remainTime = (str, endDay) => {
  const [start, end] = str;
  const endNum = Number(end);
  return endNum - endDay;
};

let number = 0;

for (let i = 0; i < N; i++) {
  arr[i] = make4(arr[i]).split("-");
}
let answerList = [];
let endDay = "0301";
let realEndDay = "1130";
let len = arr.length;
let flag = false;
let max = -Infinity;
let maxIdx = -Infinity;

while (len > number) {
  for (let i = 0; i < len; i++) {
    if (checkStartAble(arr[i], endDay) && remainTime(arr[i], endDay) > 0) {
      if (max < arr[i][1]) {
        max = arr[i][1];
        maxIdx = i;
      }
    }
  }

  if (maxIdx === -Infinity) {
    flag = false;
    break;
  }

  startDay = arr[maxIdx][0];
  endDay = arr[maxIdx][1];
  answerList.push(arr[maxIdx]);

  if (endDay > realEndDay) {
    flag = true;
    break;
  }

  number++;
}

if (answerList.length === 0 || !flag) {
  console.log("0");
  process.exit();
}

console.log(answerList.length);

console.log(answerList.length);
