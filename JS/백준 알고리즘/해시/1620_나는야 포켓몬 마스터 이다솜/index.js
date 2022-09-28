// 1620
/**
 * N개 만큼 돌려서 Map 객체(번호와, 이름)를 만들고
 * 숫자 => 포켓몬
 * 포켓몬 => 번호로 출력하면 된다
 */

[testCase, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "testCase.txt")
  .toString()
  .split("\n");
const [N, M] = testCase.split(" ").map(Number);
const pocketMonInfo = input.splice(0, N);

const makePoketMon = (pocketMonInfo) => {
  const map = new Map();
  const map2 = new Map();
  pocketMonInfo.forEach((poketMon, idx) => {
    map.set(idx + 1, poketMon);
    map2.set(poketMon.toUpperCase(), idx + 1);
  });
  return [map, map2];
};

const findPoketMon = (keyword, nameBook, numBook) => {
  if (isNaN(keyword)) {
    return numBook.get(keyword.toUpperCase());
  }
  return nameBook.get(Number(keyword));
};

const solution = (N, M, pocketMonInfo, input) => {
  let answer = [];
  const [nameBook, numBook] = makePoketMon(pocketMonInfo);
  input.forEach((el) => {
    answer.push(findPoketMon(el, nameBook, numBook));
  });
  return answer.join("\n");
};

console.log(solution(N, M, pocketMonInfo, input));
