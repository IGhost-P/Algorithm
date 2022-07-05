// 1181 : 단어 정렬
/**
 * sudo code :
 * 1. length를 이용해 길이를 구한다
 * 2. 같으면 if문으로 sort를 돌린다
 */

[N, ...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  testCase
    .sort((a, b) => {
      if (a.length === b.length) {
        return a.localeCompare(b); // 문자와 문자열을 비교해, 정렬 순서를 비교
      }
      return a.length - b.length;
    })
    .filter((el, idx) => {
      return testCase.indexOf(el) === idx; // 중복되지 않은 인덱스인 경우만 출력
    })
    .join("\n")
);
