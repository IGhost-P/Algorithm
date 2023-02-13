/**
 * dp보다는 그리디로 접근해야 할것 같다
 * 점화식을 구해보자면 .. 가장 멀리 있는 집부터 처리를 해야할것 같다
 */
function solution(cap, n, deliveries, pickups) {
  var answer = -1;
  let count = 0;
  while (deliveries.length > 0) {
    const len = deliveries.length;

    let can = cap;
    for (let i = len - 1; i >= 0; i--) {
      if (deliveries[i] <= can) {
        can -= deliveries[i];
        deliveries.splice(i, 1);
      }

      if (deliveries[i] > can || can === 0) {
        if (can === 0) {
          count += (len - deliveries.length + i + 1) * 2;
          break;
        }
        count += (len - deliveries.length + i) * 2;
        break;
      }
    }

    for (let i = len - 1; i >= 0; i--) {
      if (pickups[i] <= can) {
        can -= pickups[i];
        pickups.splice(i, 1);
      }

      if (can === 0) break;
    }
  }

  return count;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
