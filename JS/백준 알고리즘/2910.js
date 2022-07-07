// 2910 : 빈도 정렬
/**
 * 빈도를 파악하고, 해당 수대로 정렬을 하는 문제
 * 간단하게 생각하자면, Map객체를 만들고 입력을 받는다,
 * 있으면 +1 없으면 1로 초기화후 시작한다
 * sort로 정렬후 해당 value만큼 repeat하면된다
 *
 * sudo code:
 * 1. Map객체릴 만든다
 * 2. 입력을 받아, 없으면 1로 초기화, 있으면 +1을 해준다
 * 3. value만큼 반복한다
 */

[test, testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = test.split(" ");
testCase = testCase.split(" ");
const map = new Map();

const setMap = (key) => {
  if (map.has(key)) {
    map.set(key, map.get(key) + 1);
    return;
  }
  map.set(key, 1);
};

const sortMap = (map) => {
  const arr = [...map];
  return arr.sort((a, b) => {
    return b[1] - a[1];
  });
};

const solution = (N, C, testCase) => {
  testCase.forEach((el) => {
    setMap(el);
  });
  const arr = sortMap(map);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const [value, count] = arr[i];
    for (let j = 0; j < count; j++) {
      result.push(value);
    }
  }
  return console.log(result.join(" "));
};

solution(N, C, testCase);
