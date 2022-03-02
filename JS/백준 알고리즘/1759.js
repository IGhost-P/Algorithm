// // 1759 : 암호 만들기
// /*
// 서로 다른 L개의 암호
// 최소 한개의 모음 + 두개의 자음으로 구성되어있음

// 알파멧은 오름 차순
// C개의 문자의 종류에서 찾아내야함
// */

// testCase = require("fs")
//   .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
//   .toString()
//   .trim()
//   .split("\n");
// [L, C] = testCase.shift().split(" ").map(Number);
// alphas = testCase[0].split(" ").sort();
// const visited = Array(26).fill(false);
// const aeiou = "aeiou";
// q = [];

// const check = (arr) => {
//   vowels = 0;
//   consonants = 0;
//   arr.map((el) => {
//     if (aeiou.includes(el)) vowels++;
//     else consonants++;
//   });

//   if (vowels >= 1 && consonants >= 2) return true;
// };

// const getCombinations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
//     const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
//     const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기

//     // 여기서 체크
//     results.push(...attached); // 배열 spread syntax 로 모두다 push
//   });

//   return results; // 결과 담긴 results return
// };
// const result = getCombinations(alphas, L).filter((el) => check(el));
// console.log(result.map((el) => el.join("")).join("\n"));

var input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
function checkRule(password) {
  var ix;
  var vowels = ["a", "e", "i", "o", "u"];
  var cc = 0,
    vc = 0; // 자음 모음
  var pass = password;

  for (ix = 0; ix < password.length; ix++) {
    if (vowels.indexOf(password[ix]) > -1) {
      vc++;
    } else {
      cc++;
    }
  }

  return !!(cc >= 2 && vc >= 1);
}

function makePassword(L, charset, password, ix) {
  if (password.length === L) {
    if (checkRule(password)) {
      console.log(password);
    }
    return;
  }

  if (ix < charset.length) {
    makePassword(L, charset, password + charset[ix], ix + 1);
    // a t c i s w 에서 처음 '' 일떄 => a 그리도 다음은 idx는 1번 (고른 있는 단어가 ㄱㅊ으니 패스위드로)
    makePassword(L, charset, password, ix + 1);
    // a t c i s w 에서 처음 '' 일때 => '' 그리고 다음 idx는 1번  (고른 단어가 별로이지 즉 다음 단어로 만들기 위함)
  }
}

var L = +input[0].split(" ")[0],
  C = +input[0].split(" ")[1];
var charset = input[1]
  .trim()
  .split(" ")
  .sort(function (a, b) {
    return a < b ? -1 : 1;
  });
makePassword(L, charset, "", 0);
