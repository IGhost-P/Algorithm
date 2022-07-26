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

// console.log(arr);

const make4 = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
      str += "-";
    }
    if (Math.floor(arr[i] / 10) === 0) {
      str += "0" + arr[i];
    } else {
      str += arr[i];
    }
  }
  return str;
};

const checkStartAble = (str, endDay) => {
  const [start, end] = str.split("-");
  const startNum = Number(start);
  const endNum = Number(end);
  //   console.log(startNum, endDay);
  if (startNum <= Number(endDay)) {
    return true;
  }
  return false;
};

const checkEndAble = (str, endDay) => {
  const [start, end] = str.split("-");
  const startNum = Number(start);
  const endNum = Number(end);

  //   console.log(endNum, Number(endDay));
  if (endNum > Number(endDay)) {
    return true;
  }
  return false;
};

const returnTime = (str) => {
  const [start, end] = str.split("-");
  const startNum = Number(start);
  const endNum = Number(end);
  return endNum - startNum;
};

let totalArr = [];
let number = 0;

for (let i = 0; i < N; i++) {
  arr[i] = make4(arr[i]);
  totalArr.push([i, returnTime(arr[i])]);
}
let answerList = [];
let startDay = 0;
let endDay = "0301";
let realEndDay = "1130";

totalArr.sort((a, b) => {
  return b[1] - a[1];
});

while (totalArr.length > number) {
  let count = 0;

  //   console.log(startDay, endDay);
  //   console.log(totalArr, number);
  for (let i = 0; i < totalArr.length; i++) {
    if (
      answerList.length > 0 &&
      checkEndAble(answerList[answerList.length - 1], realEndDay)
    ) {
      number++;
      break;
    }

    if (
      checkStartAble(arr[totalArr[i][0]], endDay) &&
      checkEndAble(arr[totalArr[i][0]], endDay)
    ) {
      startDay = arr[totalArr[i][0]].split("-")[1];
      endDay = arr[totalArr[i][0]].split("-")[1];
      answerList.push(arr[totalArr[i][0]]);
      totalArr.splice(i, 1);
      count++;
      number = 0;
      break;
    } else {
      number++;
    }
  }
}

// console.log(answerList);

if (
  answerList.length === 0 ||
  !checkEndAble(answerList[answerList.length - 1], realEndDay)
) {
  console.log("0");
  process.exit();
}

console.log(answerList.length);
