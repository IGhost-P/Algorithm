// 16987 : 계란으로 계란치기
/**
 * 왼쪽부터 => 마지막까지 계란을 집어가며
 * 깨야한다 vs 깨지 않는다를 반복
 * 최대한 본인이 깨지지 않고 살아 남는게 중요
 * 마지막 까지 깨지 않는다면 그냥 때린다
 * (즉 내구도랑 무게가 딱 맞는게 목표, 안되면 이하로..?)
 * sudo code:
 * 1. 왼쪽을 든다
 * 2. 남은 계란을 확인한다
 *  2-1 내가 깨지면 안때린다, 모든 내구도 <  모든 무게 이면 안때림,
 *  2-2 내가 안꺠지면 때린다
 * 3. 마지막 레벨까지 깨지 않았다면 깨고 넘어간다(flag 이용)
 */

[N, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
arr = arr.map((el) => el.split(" ").map(Number));
answer = 0;
const crash = (nowIndex) => {
  if (nowIndex == N) {
    breakEggs = 0;
    for (let i = 0; i < N; i++) {
      if (arr[i][0] <= 0) {
        breakEggs += 1;
      }
    }
    answer = Math.max(answer, breakEggs);
    return;
  }

  if (arr[nowIndex][0] <= 0) {
    crash(nowIndex + 1);
    return;
  }

  isAllBroken = true;
  for (let i = 0; i < N; i++) {
    if (i === nowIndex) continue;
    if (arr[i][0] > 0) {
      isAllBroken = false;
      break;
    }
  }

  if (isAllBroken) {
    answer = Math.max(answer, N - 1);
  }

  for (let i = 0; i < N; i++) {
    if (i == nowIndex) continue;
    if (arr[i][0] <= 0) continue;
    arr[nowIndex][0] -= arr[i][1];
    arr[i][0] -= arr[nowIndex][1];
    crash(nowIndex + 1);
    arr[nowIndex][0] += arr[i][1];
    arr[i][0] += arr[nowIndex][1];
  }
};

crash(0);
console.log(answer);
