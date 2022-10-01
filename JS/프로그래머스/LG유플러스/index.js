// // make Anagram function

// /**
//  * solution
//  *
//  * 숫자를 중복없이 추가해서 애너그램의 갯수를 구하는 문제
//  *
//  * @param {*} arr  숫자 배열
//  * @returns 애너그램의 갯수
//  */
// function solution(arr) {
//   var answer = 0;

//   // 1. 중복되지 않는 숫자들을 집어 넣기 위한 set을 만든다
//   let set = new Set();

//   // 2. 숫자를 뽑아 정렬을 한뒤에 중복없이 추가한다
//   for (let i = 0; i < arr.length; i++) {
//     let str = [...String(arr[i])].sort().join("");
//     set.add(str);
//   }

//   // 3. set의 크기를 반환한다
//   answer = set.size;
//   return answer;
// }

// console.log(solution([123, 456, 789, 321, 654, 987])); // 2

// /**
//  * solution
//  *
//  * 문자열을 압축하는 문제
//  *
//  * @param {*} compressed 압축된 문자열
//  * @returns 압축을 풀어서 반환
//  */

// function solution(compressed) {
//   var answer = "";

//   // 1. 압축을 풀어줄 스택을 만든다
//   let stack = [];

//   for (let i = 0; i < compressed.length; i++) {
//     // 2. 압축을 풀어야하는 경우
//     if (compressed[i] === ")") {
//       let temp = "";

//       // 3. 스택에서 문자열을 뽑아낸다
//       while (stack[stack.length - 1] !== "(") {
//         temp = stack.pop() + temp;
//       }
//       stack.pop();
//       let num = "";

//       // 4. 스택에서 숫자를 뽑아낸다
//       while (!isNaN(stack[stack.length - 1])) {
//         num = stack.pop() + num;
//       }

//       // 5. 숫자만큼 문자열을 반복해서 스택에 넣는다
//       let stackPush = temp.repeat(num);
//       stack.push(stackPush);
//     } else {
//       // 2-1. 압축을 풀지 않는 경우 스택에 추가한다
//       stack.push(compressed[i]);
//     }
//   }

//   // 6. 스택에 있는 문자열을 하나로 합쳐서 반환한다
//   answer = stack.join("");

//   return answer;
// }

// console.log(solution("2(3(hi)co)")); //
// ("hihihicohihihico");

// // make opposite direction function
// function solution(train) {
//   var answer = -1;

//   let trainArr = [];
//   // 1. 트레인의 길이를 구한다
//   let trainRowLength = train.length;
//   let trainColLength = train[0].length;

//   for (let i = 0; i < trainRowLength; i++) {
//     let temp = [];
//     for (let j = 0; j < trainColLength; j++) {
//       temp.push(train[i][j]);
//     }
//     trainArr.push(temp);
//   }

//   let maxCount = 0;

//   let direction = ["E", "S", "W", "N"];

//   let oppositeArr = [];
//   let oppositeArrDirection = [];
//   let oppositeDirectionDict = {
//     S: "N",
//     E: "W",
//     N: "S",
//     W: "E",
//   };

//   // 2. 트레인을 돌면서 방향을 바꿔준다
//   for (let i = 0; i < trainRowLength; i++) {
//     for (let j = 0; j < trainColLength; j++) {
//       let dx = [0, 1, 0, -1];
//       let dy = [1, 0, -1, 0];
//       let direction = trainArr[i][j];
//       let oppositeDirection = oppositeDirectionDict[direction];
//       for (let k = 0; k < 4; k++) {
//         let nx = i + dx[k];
//         let ny = j + dy[k];
//         if (nx < 0 || nx >= trainRowLength || ny < 0 || ny >= trainColLength)
//           continue;
//         if (trainArr[nx][ny] === oppositeDirection) {
//           maxCount++;
//           oppositeArr.push([i, j]);
//           oppositeArrDirection.push(direction);
//         }
//       }
//     }
//   }

//   let permuationArr = permutationWithRepetition(
//     oppositeArrDirection,
//     oppositeArrDirection.length
//   );

//   let min = Infinity;
//   let minCount = Infinity;
//   let minArr = [];

//   // 3. 트레인을 돌면서 방향을 바꿔준다
//   permuationArr.forEach((oppositeDirections) => {
//     // copy trainArr
//     let tempArr = [];
//     let count = 0;
//     let changeDirection = 0;

//     for (let k = 0; k < trainRowLength; k++) {
//       let temp = [];
//       for (let l = 0; l < trainColLength; l++) {
//         temp.push(trainArr[k][l]);
//       }
//       tempArr.push(temp);
//     }

//     for (let k = 0; k < oppositeArr.length; k++) {
//       if (
//         tempArr[oppositeArr[k][0]][oppositeArr[k][1]] !== oppositeDirections[k]
//       ) {
//         changeDirection++;
//       }

//       tempArr[oppositeArr[k][0]][oppositeArr[k][1]] = oppositeDirections[k];
//     }

//     for (let i = 0; i < trainRowLength; i++) {
//       for (let j = 0; j < trainColLength; j++) {
//         let dx = [0, 1, 0, -1];
//         let dy = [1, 0, -1, 0]; // 우 하 좌 상
//         let direction = tempArr[i][j];
//         let oppositeDirection = oppositeDirectionDict[direction];

//         // console.log(tempArr[i][j], oppositeDirection, i, j);

//         for (let k = 0; k < 4; k++) {
//           let nx = i + dx[k];
//           let ny = j + dy[k];
//           if (nx < 0 || nx >= trainRowLength || ny < 0 || ny >= trainColLength)
//             continue;

//           if (
//             direction === "S" &&
//             k === 1 &&
//             oppositeDirection === tempArr[nx][ny]
//           ) {
//             count++;
//           } else if (
//             direction === "E" &&
//             k === 0 &&
//             oppositeDirection === tempArr[nx][ny]
//           ) {
//             count++;
//           } else if (
//             direction === "N" &&
//             k === 3 &&
//             oppositeDirection === tempArr[nx][ny]
//           ) {
//             count++;
//           } else if (
//             direction === "W" &&
//             k === 2 &&
//             oppositeDirection === tempArr[nx][ny]
//           ) {
//             count++;
//           } else {
//             continue;
//           }
//         }
//       }
//     }

//     if (count < maxCount && count < minCount) {
//       minCount = Math.min(minCount, count);
//       min = Math.min(min, changeDirection);
//     }
//   });

//   answer = min;

//   return answer;
// }

// console.log(solution(["EW", "EW", "EW"])); // 1

/**
 * makeTournament
 *
 * 토너먼트를 진행하면서 두 선수가 만나게 되면 두 선수 중 더 강한 선수가 이긴다.
 *
 * @param {*} arr  프로, 아마추어 선수들 정보
 * @param {*} spcialCount  스폐셜 경기 개수
 * @returns
 */
const makeTournament = (arr, spcialCount) => {
  if (arr.length === 1) {
    return spcialCount;
  }
  const result = [];

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] === 1 || arr[i + 1] === 1) {
      result.push(1);
      spcialCount++;
    } else {
      result.push(0);
    }
  }

  return makeTournament(result, spcialCount);
};

/**
 * solution
 *
 * 아마추어 선수중 한명을 프로로 바꾼뒤에 토너먼트를 진행하면서 스폐셜 경기가 몇번 진행되는지 구한다.
 *
 * @param {*} arr  프로, 아마추어 선수들 정보
 * @returns
 * 스폐셜 경기 개수
 */

function solution(players) {
  var answer = -1;
  let spcialCount = 0;

  let max = -Infinity;

  const zeroPlayeys = players
    .map((el, idx) => {
      if (el === 0) {
        return idx;
      }
    })
    .filter((el) => el !== undefined);

  zeroPlayeys.forEach((el) => {
    const temp = [...players];
    temp[el] = 1;
    let total = makeTournament(temp, spcialCount);
    max = Math.max(max, total);
  });

  answer = max;

  return answer;
}

console.log(solution([1, 0, 0, 1, 0, 0, 1, 0]));
