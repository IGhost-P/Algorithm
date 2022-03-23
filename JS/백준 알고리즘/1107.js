// 1107 : 리모컨
/**
 * 남아 있는 숫자와 +-를 통해 해당 번호로 가야한다
 *
 * 기본적인 guard caluse
 * 수빈이랑 같은 채널일때
 *
 * 그 뒤부터는 가려는 채널까지 몇번의 버튼을 눌러야하는지 고민해야한다
 *
 * sudo code:
 * 1. 남아 있는 숫자들중 해당 숫자가 포함되어 있는 경우를 제거한다
 * 2. 제거 하지 못하는 숫자가 나온다면 남아있는 수중 가장 가까운 수를 뽑는다
 * 3. 그리고 차이 만큼 더한다 = 차이가 같다면 어떻게 해야할것인가..?
 *  3-1. 일단 차이가 가장 작으면서, 같은경우를 생각해서 따로 더해둔다
 *      예시) 545773 이라 했을때 7에서 차이가 생김 5 , 9 그뒤에 또 숫자가 있다면 553, 993 이 들어오는데, 545553번 똔느 545993 이 나온다, 여기서 전체 수를 빼면 => 똑같네 걍
 * 이러면 안될듯, 버튼을 다 만들고 니서 삭제하는 형태로
 */

testCase = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = testCase.shift();
M = Number(testCase.shift());
target = N;
remainNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = testCase[0] ? testCase[0].split(" ").map(Number) : [];
arr = arr.sort((a, b) => a - b);
answer = "";
flag = false;
const solution = () => {
  cnt = 0;
  if (N == 100) {
    return console.log(0);
  }
  remainNum = remainNum.filter((num) => !arr.includes(num));

  //   console.log(remainNum, arr);

  N = [...N].map(Number);
  Nlen = N.length;
  for (let i = 0; i < Nlen; i++) {
    farNum = new Array(remainNum.length).fill(0);
    if (N.length < 1) {
      return console.log(cnt);
    }

    if (remainNum.includes(N[0])) {
      answer += N.shift();
      cnt++;
    } else {
      remainNum.forEach((num, idx) => {
        farNum[idx] = [Math.abs(num - N[0]), idx];
      });
      farNum.sort((a, b) => a[0] - b[0]);

      answer += remainNum[farNum[0][1]];
      //   console.log(farNum[0][0]);
      cnt++;
      //   console.log("차이", farNum[0][0]);

      N.length > 1 ? (flag = true) : (cnt += farNum[0][0]);
      console.log(answer, cnt, N, remainNum);
    }
  }
  answer = answer.replace(/(^0+)/, "");
  console.log("답", answer);
  console.log(
    (cnt += flag && answer.length > 0 ? Math.abs(target - answer) : 0)
  );
};
solution();
