"use strict";

/**
 * dp보다는 그리디로 접근해야 할것 같다
 * 점화식을 구해보자면 .. 가장 멀리 있는 집부터 처리를 해야할것 같다
 */
function solution(cap, n, deliveries, pickups) {
  var answer = -1;
  var count = 0;
  var len = deliveries.length;
  console.log(deliveries, pickups);

  while (deliveries.length > 0) {
    var can = cap;

    for (var i = len - 1; i >= 0; i--) {
      if (deliveries[i] <= can) {
        can -= deliveries[i];
        deliveries.splice(i, 1);
        count += i;
      }

      if (can === 0) break;
    }

    for (var _i = len - 1; _i >= 0; _i--) {
      if (pickups[_i] <= can) {
        can -= pickups[_i];
        pickups.splice(_i, 1);
      }

      if (can === 0) break;
    }
  }

  console.log(count);
  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));