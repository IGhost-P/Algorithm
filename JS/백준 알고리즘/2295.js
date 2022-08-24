// 2295 : 세수의 합
/**
 *
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
arr = arr.map(Number);

let result = new Set();

// 2개의 합을 구한다, 하지만 중복을 제거한다 => 합에서 중복이 나올수 있기 떄문에
for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    result.add(arr[i] + arr[j]);
  }
}

let ans = 0;
// ex) 18 - 10 = 8 이고 이 합이 있다면 => 이합에다가 + 10을 한것이 최대값일것이다
// 즉 k = x + y + z 인데 k - z = x + y(두수의 합)이 되는 경우중 k가 가장 최대값을 가진다면 k가 가질수있는 최대값이다.
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const s = arr[i] - arr[j]; //
    if (s < 0) continue;
    if (result.has(s) && arr[i] > ans) ans = arr[i];
  }
}

console.log(ans);
