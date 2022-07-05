// 5648 : 역원소 정렬
/**
 * 입력받은 값들을 모두 거꾸로 저장해야함
 *
 * sudo code :
 * 1. 입력을 받고 해당 배열을 뒤에서 부터 인덱스 별로 (+로)받는다
 * 2. ' '칸이 나오면 여태 합친 문자를 answerList에 push
 * 3. answerList를 sor해준다
 */

[...testCase] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const answerList = [];
let answer = "";

const makeAnswer = (str, i) => {
  if (i === 0) {
    answer += str;
    answerList.push(parseInt(answer));
    answer = "";
    return;
  }

  if (str === " ") {
    answerList.push(parseInt(answer));
    answer = "";
    return;
  }
  answer += str;
};

const solution = () => {
  testCase.forEach((el, index) => {
    len = el.length;
    for (let i = len - 1; i >= 0; i--) {
      makeAnswer(el[i], i);
    }

    if (index === 0) {
      answerList.pop();
    }
  });
  return answerList.sort((a, b) => a - b).join("\n");
};

console.log(solution());
