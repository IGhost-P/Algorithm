[NM, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map((e) => +e);
const map = arr.map((e) => e.split(" ").map((e) => +e));

const house = [];
const chicken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) house.push([i, j]);
    if (map[i][j] === 2) chicken.push([i, j]);
  }
}

const combination = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((e) => [e]);
  arr.forEach((e, idx, origin) => {
    const fixed = e;
    const restArr = origin.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((e) => [fixed, ...e]);
    result.push(...combineFix);
  });
  return result;
};

const chickenCombination = combination(chicken, M);

let min = Infinity;

const getDistance = (house, chicken) => {
  let sum = 0;
  for (let i = 0; i < house.length; i++) {
    let min = Infinity;
    for (let j = 0; j < chicken.length; j++) {
      const dist =
        Math.abs(house[i][0] - chicken[j][0]) +
        Math.abs(house[i][1] - chicken[j][1]);
      min = Math.min(min, dist);
    }
    sum += min;
  }
  return sum;
};

for (let i = 0; i < chickenCombination.length; i++) {
  const dist = getDistance(house, chickenCombination[i]);
  min = Math.min(min, dist);
}

console.log(min);
