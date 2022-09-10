// 23559 : 밥
/**
 * 명제 : 가장 큰 가치를 가지는 밥을 먹고, 만약 가치가 같은경우 더 싼걸 먹는다
 */

let [NX, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./예제.txt")
  .toString()
  .trim()
  .split("\n");
let [N, X] = NX.split(" ").map(Number);
let [...rice] = testCase.map((el) => el.split(" ").map(Number));
let answer = 0;

// 일단 1000원으로 고르기
for (let i = 0; i < N; i++) {
  X -= 1000;
  answer += rice[i][1];
}

// 5000원 가성비 vs 1000원 가성비로 정렬
rice.sort((a, b) => {
  return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
});

// 5000원 가성비가 더 좋다면  5000원을 고르고 추가로 4000원을 더 낸다
for (let i = 0; i < N; i++) {
  if (X >= 4000 && rice[i][0] > rice[i][1]) {
    X -= 4000;
    answer += rice[i][0] - rice[i][1];
  }
}

console.log(answer);
