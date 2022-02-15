// 공유기 설치

/*
 공유기 거리가 가장 짧은 <-> 가장 넒은 것중에서
 공유기 거리에 따라 설치할수 있는 집의 개수가 target 개수랑 맞아야함

 mid = 최소 인접거리, 보다 작은 배열이라면 => 공유기를 더 설치 => mid를 늘려 공유기들 덜 설치
 mid = 최소 인접거리, 보다 큰 배열이라면 => 공유기를 덜 설치 => mid를 줄여 공유기를 더 설치
*/

[test_case, ...homeLocation] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
test_case = test_case.split(" ");
homeLocation = homeLocation.map((e) => Number(e)).sort((a, b) => a - b);
const [home, wifi] = test_case;

let left = homeLocation[1] - homeLocation[1];
let rigth = Math.max(...homeLocation) - homeLocation[0];
let answer = 0;

while (left <= rigth) {
  // left, rigth, 배열 확인
  //   console.log(left, rigth, homeLocation);
  // 기본적으로 하나는 설치
  let cnt = 1;
  let list = [];
  let prv = homeLocation[0];
  mid = parseInt((left + rigth) / 2);
  homeLocation.forEach((el) => {
    if (mid <= el - prv) {
      list.push([prv, el]);
      prv = el;
      cnt++;
    }
  });

  if (cnt >= wifi) {
    left = mid + 1;
    answer = mid;
  } else {
    rigth = mid - 1;
  }

  // 확인용
  //   console.log("요소 집합", list, mid, "cnt", cnt);
}

console.log(answer);
