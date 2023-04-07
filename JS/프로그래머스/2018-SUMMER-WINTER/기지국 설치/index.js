function solution(n, stations, w) {
  var answer = 0;
  let start = 1;
  stations.forEach((station) => {
    const left = station - w;
    const right = station + w;
    if (start < left) {
      const length = left - start;
      answer += Math.ceil(length / (2 * w + 1));
    }
    start = right + 1;
  });
  if (start <= n) {
    const length = n - start + 1;
    answer += Math.ceil(length / (2 * w + 1));
  }

  return answer;
}

console.log(solution(11, [4, 11], 1));
