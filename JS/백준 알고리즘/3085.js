// 3085 : 사탕게임
/*
즉 , 딱 한번 바꿔서 가장 많이 먹을수있는 경우를 찾아야함
=> dfs를 통해 돌리면 될듯?

sudo code :
1. 사탕 입력을 받는다
2. 상하좌우를 바꾼뒤 행과 열을 돌린다
    2-1, 바꿀때는 서로 다른 색깔인 경우에만
3. filter를 돌려서 lenght를 구해 answer에 넣는다, 이중 가장 큰것이 정답 
*/

[N, ...arr] = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);

arr = arr.map((el) => el.split(""));

// const checkColor = (arr) => {
//   answer = 1;
//   for (let i = 0; i < N; i++) {
//     cnt = 1;
//     // 열순회
//     for (let j = 1; j < N; j++) {
//       if (arr[i][j] === arr[i][j - 1]) {
//         // 이전 것과 같다면 cnt에 1 더하기
//         cnt += 1;
//         // 이전 것과 다르다면 다시 1로 초기화
//       } else {
//         cnt = 1;
//       }

//       // 비교해서 현재 cnt가 더 크다면 answer 갱신하기
//       if (cnt > answer) {
//         answer = cnt;
//       }
//     }
//     cnt = 1;
//     // 행순회
//     for (let j = 1; j < N; j++) {
//       if (arr[j][i] === arr[j - 1][i]) {
//         // 이전 것과 같다면 cnt에 1 더하기
//         cnt += 1;
//         // 이전 것과 다르다면 다시 1로 초기화
//       } else {
//         cnt = 1;
//       }

//       // 비교해서 현재 cnt가 더 크다면 answer 갱신하기
//       if (cnt > answer) {
//         answer = cnt;
//       }
//     }
//   }
//   return answer;
// };

function checkColor(arr) {
  let answer = 1;

  for (let i = 0; i < N; i++) {
    cnt = 1;
    for (let j = 1; j < N; j++) {
      if (arr[i][j] == arr[i][j - 1]) {
        cnt += 1;
      } else {
        cnt = 1;
      }

      if (cnt > answer) {
        answer = cnt;
      }
    }

    cnt = 1;
    for (let j = 1; j < N; j++) {
      if (arr[j][i] == arr[j - 1][i]) {
        cnt += 1;
      } else {
        cnt = 1;
      }
      if (cnt > answer) {
        answer = cnt;
      }
    }
  }
  return answer;
}

const solution = () => {
  answer = 0;
  temp = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 열 바꾸기
      if (j + 1 < N) {
        [arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];

        temp = checkColor(arr);

        if (temp > answer) {
          answer = temp;
        }

        [arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];
      }

      // 행 바꾸기
      if (i + 1 < N) {
        [arr[i][j], arr[i + 1][j]] = [arr[i + 1][j], arr[i][j]];

        temp = checkColor(arr);

        if (temp > answer) {
          answer = temp;
        }
        [arr[i][j], arr[i + 1][j]] = [arr[i + 1][j], arr[i][j]];
      }
    }
  }
  console.log(answer);
};
solution();
