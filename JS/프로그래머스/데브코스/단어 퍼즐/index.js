function solution(strs, t) {
  var answer = 0;
  let len = t.length;
  let dp = new Array(len + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < len; i++) {
    if (dp[i] === Infinity) continue;
    for (let j = 0; j < strs.length; j++) {
      let str = strs[j]; // ['ba', 'na', 'n', 'a'] 에서 'ba' 를 가져왔다면
      let len2 = str.length; // 'ba' 의 길이는 2
      if (t.substr(i, len2) === str) {
        // t 의 i 번째부터 len2 만큼의 문자열이 str 과 같다면 ex) t.substr(0, 2) === 'ba'
        // dp[i + len2] 는 t 의 i + len2 번째까지의 문자열을 만들기 위해 필요한 최소한의 단어의 개수 = dp[i] + 1 (str 을 추가했으므로) or dp[i + len2]
        // 둘중 작은 값을 dp[i + len2] 에 넣는다.
        console.log(
          "str:",
          str,
          `dp[${i + len2}]`,
          dp[i + len2],
          `dp[${i}]:`,
          dp[i]
        );
        dp[i + len2] = Math.min(dp[i + len2], dp[i] + 1);
        console.log(`최종 dp[${i + len2}]`, dp[i + len2]);
      }
    }
  }
  answer = dp[len] === Infinity ? -1 : dp[len];

  return answer;
}

console.log(solution(["ba", "na", "n", "a"], "banana"));
