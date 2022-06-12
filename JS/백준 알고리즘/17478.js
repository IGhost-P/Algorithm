// 17478 : 재귀함수가 뭔가요?
/**
 * ? 뭐지 ? 여튼 여러번 출력하는건가봄
 */

testCase = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "예제.txt")
  .toString()
  .trim();

const solution = (deep) => {
  if (deep > 0) {
    return `
${`____`.repeat(testCase - deep)}"재귀함수가 뭔가요?"
${`____`.repeat(
  testCase - deep
)}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
${`____`.repeat(
  testCase - deep
)}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
${`____`.repeat(
  testCase - deep
)}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."${solution(
      deep - 1
    )}
${`____`.repeat(testCase - deep)}라고 답변하였지.`;
  }

  return `
${`____`.repeat(testCase - deep)}"재귀함수가 뭔가요?"
${`____`.repeat(testCase - deep)}"재귀함수는 자기 자신을 호출하는 함수라네"
${`____`.repeat(testCase - deep)}라고 답변하였지.`;
};

console.log(
  `어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.` +
    solution(testCase)
);
