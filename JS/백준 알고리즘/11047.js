// 11047 : 동전 0
/**
 * 귀류법을 통해서 보조 정리를 이용해보자
 *
 * 1. 보조 정리 1
 * = 10원 100원 동전은 4개, 50원 동전은 1개를 쓰는것이 최소한의 개수이다
 * => 10,100원 동전이 5개가 되면 => 50원 500원으로 대체가 가능
 * => 50원 동전이 2개가 되면 => 100원으로 대체가 가능
 *
 * 2. 보조정리 2
 * = 최대한 500원을 많이 쓰는것이 좋다
 * => 보조 정리 1에 의해 최대 감당가능한 돈은 490원이다, 500원을 최대한 많이 사용해 해결해야한다.
 *
 * sudo code:
 * 1. 오름 차순으로 주어진 동전중 K 보다 작은 가치를 사용을 한다
 * 2. 이후 없다면 남은 돈보다 작은 가치를 사용한다.. 계속 반복
 *
 */

[NK, ...coins] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(NK.split(" ")[0]);
K = Number(NK.split(" ")[1]);
coins = coins.map(Number);

const solution = (coins, money) => {
  let count = 0;
  for (let i = N - 1; i >= 0; i--) {
    count += Math.floor(money / coins[i]);
    money %= coins[i];
  }
  return count;
};

console.log(solution(coins, K));
