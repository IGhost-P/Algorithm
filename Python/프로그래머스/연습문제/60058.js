// 괄호 변환
const answerList = [];

// 균형 잡혔는지 확인하는 함수
const checkBalence = (str) => {
  let left = 0;
  let right = 0;
  let num = 0;

  // 단순하게, (, ) 의 갯수가 같은지만 확인하면 된다
  while (num < str.length) {
    if (str[num] === "(") {
      left++;
    } else {
      right++;
    }

    num++;
  }

  if (left === right) {
    return true;
  }
  return false;
};

// 올바른지 확인하는 함수
const checkRight = (str) => {
  let stack = [];
  let num = 0;
  while (num < str.length) {
    // 괄호가 )일때 스택의 마지막 부분이 ( 가 아니면 안됨
    if (str[num] === ")" && stack.length > 0) {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    } else {
      stack.push(str[num]);
    }
    num++;
  }

  // 모두 돌렸을때 stack이 비어있지 않다면, 올바르지 않은 괄호이다

  if (stack.length === 0) {
    return true;
  }

  return false;
};

// 적어도 균형잡힌 관호 문자열로 u,v를 나누는 함수, 마지막에 빈문자열('')로 마무리 했다
const splitBraket = (str, count = 0) => {
  let originStr = [...str];
  let checkStr = "";
  let u = "";
  let v = "";

  while (originStr.length > 0) {
    checkStr += originStr.shift();

    if (checkBalence(checkStr)) {
      u = checkStr;
      v = originStr;
      answerList.push(u);

      return splitBraket(v, ++count);
    }
  }
  answerList.push("");
};

// 올바르지 않은 괄호일경우 변경하는 함수
const changeStr = (u, v) => {
  u = [...u];
  v = [...v];

  // 앞뒤 삭제
  if (u.length > 0) {
    u.shift();
    u.pop();
  }

  // 괄호 뒤집기
  if (u.length > 0) {
    u = u.map((el) => {
      if (el === "(") {
        return ")";
      }
      return "(";
    });
  }

  // 더하기
  return "(" + v.join("") + ")" + u.join("");
};

function solution(p) {
  var answer = "";

  // 빈문자열이면 그대로 출력
  if (p === "") {
    return p;
  }

  // 올바른 괄호라면 바로 출력
  if (checkRight(p)) {
    return p;
  }

  // 분리해야한다면 (군형잡힌 괄호문자열로)분리를 진행한다.
  splitBraket(p, 0);

  // 이제 균형잡힌 괄호 문자열로 분리된 list를 거꾸로 돌아가며 확인하자
  // [ )( , )( , () , '' ] 이라면
  // 1. u = () , v ='' 이기때문에 u가 올바른지 아닌지 확인을 하자

  while (answerList.length > 1) {
    v = answerList.pop();
    u = answerList.pop();

    // 올바르지 않다면 변경
    if (!checkRight(u)) {
      newU = changeStr(u, v);
      answerList.push(newU);
    } else {
      // 올바르다면 그대로 u랑v를 더한다
      answerList.push(u + v);
    }
  }

  // 남은 list를 그대로 join하면 끝
  answer = answerList.join("");

  return answer;
}
