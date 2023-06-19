// 조합으로 k개 만큼 뽑고, 집합 돌려서 가장 작은 값

const combination = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });

  return result;
};

function solution(k, tangerine) {
  var answer = Infinity;
  const ret = combination(tangerine, k);

  ret.forEach((v) => {
    const set = new Set();
    v.forEach((v) => {
      set.add(v);
    });

    answer = Math.min(answer, set.size);
  });

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
