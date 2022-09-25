// /**
//  * getEndDate
//  *
//  * 시작일로 부터 약관의 유효기간을 계산하여 종료일을 반환한다.
//  *
//  * @param {String} startDate
//  * @param {String} term
//  * @returns {String} endDate
//  */
// const getEndDate = (startDate, term) => {
//   // 1. 시작일을 구한다
//   const [startYear, startMonth, startDay] = startDate
//     .split(".")
//     .map((v) => Number(v));

//   // 2. day가 28일이 고정이므로 term만큼 28일을 더한다.
//   let plusDay = startDay - 1 + term * 28;
//   const plusMonth = startMonth + Math.floor(plusDay / 28);
//   const plusYear = startYear + Math.floor(plusMonth / 12);

//   // 3. 28일 기준으로 endDate를 구한다
//   let endDay = plusDay % 28;
//   let endMonth = plusMonth % 12;
//   let endYear = plusYear;

//   // 4. 만약 endDAy가 0(또는 음수)이라면 전날로 변경한다.
//   if (endDay <= 0) {
//     endDay = 28;
//     endMonth -= 1;
//   }
//   if (endMonth <= 0) {
//     endMonth = 12;
//     endYear -= 1;
//   }

//   return `${endYear}.${endMonth}.${endDay}`;
// };

// /**
//  * compareDate
//  *
//  * 두 날짜를 비교하여 크면 1, 같으면 0, 작으면 -1을 반환한다.
//  *
//  * @param {String} date1
//  * @param {String} date2
//  * @returns {Number} result : 1, 0, -1 값을 판단하여 반환한다.
//  */
// const compareDate = (date1, date2) => {
//   const [year1, month1, day1] = date1.split(".").map((v) => Number(v));
//   const [year2, month2, day2] = date2.split(".").map((v) => Number(v));
//   if (year1 > year2) {
//     return 1;
//   } else if (year1 < year2) {
//     return -1;
//   }

//   if (month1 > month2) {
//     return 1;
//   } else if (month1 < month2) {
//     return -1;
//   }

//   if (day1 > day2) {
//     return 1;
//   } else if (day1 < day2) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

// /**
//  * solution
//  *
//  * 1. 시작일을 기준으로 약관의 유효기간을 계산하여 종료일을 구한다.
//  *
//  * @param {*} today
//  * @param {*} terms
//  * @param {*} privacies
//  * @returns  {Array} answer : 파기할 약관의 index + 1 값을 반환한다.
//  */
// function solution(today, terms, privacies) {
//   var answer = [];
//   const termsMap = new Map();
//   for (let i = 0; i < terms.length; i++) {
//     const [term, privacy] = terms[i].split(" ");
//     termsMap.set(term, privacy);
//   }

//   privacies.forEach((DateAndPrivacy, index) => {
//     const [startDate, privacy] = DateAndPrivacy.split(" ");
//     const endDate = getEndDate(startDate, Number(termsMap.get(privacy)));

//     console.log(today, endDate);
//     if (compareDate(endDate, today) < 0) {
//       answer.push(index + 1);
//     }
//   });

//   return answer;
// }

// console.log(
//   solution(
//     "2020.01.01",
//     ["Z 3", "D 5"],
//     [
//       "2019.01.01 D",
//       "2019.11.15 Z",
//       "2019.08.02 D",
//       "2019.07.01 D",
//       "2018.12.28 Z",
//     ]
//   )
// ); // [1,3]

// // rate 기준을 정한다
// const discountRate = [40, 30, 20, 10];

// /**
//  * permutationWithRepetition
//  *
//  * rate기준으로 가지고 이모티콘의 개수만큼 중복순열을 구한다
//  *
//  * @param {Array} arr : 할인 기준
//  * @param {Number} num : 이모티콘의 개수
//  * @returns  {Array} result : 할인 기준에 따른 중복순열을 반환한다.
//  */
// const permutationWithRepetition = (arr, num) => {
//   const result = [];
//   if (num === 1) return arr.map((v) => [v]);
//   arr.forEach((v, idx, arr) => {
//     const fixed = v;
//     const restArr = arr;
//     const permutationArr = permutationWithRepetition(restArr, num - 1);
//     const combineFix = permutationArr.map((v) => [fixed, ...v]);
//     result.push(...combineFix);
//   });
//   return result;
// };

// /**
//  * solution
//  *
//  * 1. 할인 기준에 따른 중복순열을 구한다.
//  * 2. 중복순열을 순회하며 할인 금액을 구한다.
//  * 3. 할인금액에 따라 유저의 최종 금액을 구한다.
//  * 4. 최종 금액의 최대치를 구한다.
//  *
//  * @param {Array} users
//  * @param {Array} emoticons
//  * @returns {Number} answer : 최종 금액의 최대치를 반환한다.
//  */
// function solution(users, emoticons) {
//   var answer = [];
//   const emotioncsLen = emoticons.length;

//   // 1. 중복 순열을 통해 모든 경우의 수를 구한다.
//   const discountRateArr = permutationWithRepetition(discountRate, emotioncsLen);

//   // 2, 모든 경우의 수에 따라 할인금액을 정한다.
//   const discountEmoticons = discountRateArr.map((v) => {
//     return emoticons.map((emoticon, index) => {
//       return emoticon - (emoticon * v[index]) / 100;
//     });
//   });

//   // 최종 금액
//   let totalPrice = 0;
//   let totalPlus = 0;
//   // 4. 모든 경우의수가 가 포함된 할인금액을 순회한다
//   discountEmoticons.forEach((discountEmoticon, combineIdx) => {
//     // 두 유저의 최대값
//     let usersTotalPrice = 0;
//     let usersTotalPlus = 0;

//     // 5. 유저의 수만큼 순회하며, 이모티콘을 구매한다
//     const userEmoticons = users.map((user, useIdx) => {
//       const [availableRate, availablePirce] = user;
//       // 유저 한명당 가지게 되는 최대값
//       let userTotalPrice = 0;
//       let userTotalPlus = 0;

//       // 6. 이모티콘을 순회한다
//       discountEmoticon.forEach((emoticonPrice, index) => {
//         // 각 이모티콘에 대한 할인율
//         let rate = discountRateArr[combineIdx][index];

//         // 7. 할인율이 사용자가 가진 할인율보다 크면 산다
//         if (availableRate <= rate) {
//           userTotalPrice += emoticonPrice;
//         }

//         // 8 사용자가 구매한 총합이 사용자가 생각한 금액보다 크다면 카카오 플러스에 더한다
//         if (userTotalPlus === 0 && userTotalPrice >= availablePirce) {
//           userTotalPlus += 1;
//           userTotalPrice = 0;
//         }

//         if (userTotalPlus === 1) {
//           userTotalPrice = 0;
//         }
//       });

//       // 9. 모든 유저의 최대값을 구한다
//       usersTotalPrice += userTotalPrice;
//       usersTotalPlus += userTotalPlus;
//     });

//     // console.log(usersTotalPrice, usersTotalPlus);

//     // 10. 만약 모든 유저가 구매한 값의 결과가 최종 금액보다 크다면 최종 금액을 갱신한다
//     if (totalPlus < usersTotalPlus) {
//       totalPlus = usersTotalPlus;
//       totalPrice = usersTotalPrice;
//     } else if (totalPlus === usersTotalPlus) {
//       totalPrice = Math.max(totalPrice, usersTotalPrice);
//     }
//   });
//   answer = [totalPlus, totalPrice];

//   return answer;
// }

// console.log(
//   solution(
//     [
//       [40, 10000],
//       [25, 10000],
//       [40, 2900],
//       [23, 10000],
//       [11, 5200],
//       [5, 5900],
//       [40, 3100],
//       [27, 9200],
//       [32, 6900],
//     ],
//     [7000, 9000]
//   )
// // ); // [1 , 5400]

// const checkNode = (binary) => {
//   binary = [...binary];
//   let answer = [];
//   const merged = [];
//   if (binary.length % 2 === 0) binary.unshift(0);

//   const splitHalf = (arr) => {
//     const half = Math.floor(arr.length / 2);

//     if (arr.length === 1) {
//       return answer.push(true);
//     }

//     if (arr[half] == 0) {
//       return answer.push(false);
//     }

//     if (arr[half] === "1") {
//       const left = arr.slice(0, half);
//       const right = arr.slice(half + 1, arr.length);
//       splitHalf(left);
//       splitHalf(right);
//     }
//   };
//   splitHalf(binary);

//   return answer.every((v) => v === true);
// };

// function solution(numbers) {
//   var answer = [];
//   numbers.forEach((number, index) => {
//     const binary = number.toString(2);
//     checkNode(binary) ? answer.push(1) : answer.push(0);
//   });
//   return answer;
// }

// console.log(solution([58, 111, 95])); // [1, 0]

/**
 * chekDimension
 *
 * r1,r2,c1,c2의 범위를 체크한다
 *
 * @param {*} r1
 * @param {*} c1
 * @param {*} r2
 * @param {*} c2
 * @returns
 */
const checkDimension = (r1, c1, r2, c2) => {
  const row = Math.abs(r1 - r2);
  const col = Math.abs(c1 - c2);

  if (r1 === r2 && c1 === c2) {
    startRow = r1;
    startCol = c1;
    endRow = r2;
    endCol = c2;
    return [startRow, startCol, endRow, endCol];
  }

  if (r1 === r2 && c1 < c2) {
    startRow = r1;
    startCol = c1;
    endRow = r2;
    endCol = c2;
    return [startRow, startCol, endRow, endCol];
  } else if (r1 === r2 && c1 > c2) {
    startRow = r1;
    startCol = c2;
    endRow = r2;
    endCol = c1;
    return [startRow, startCol, endRow, endCol];
  } else if (c1 === c2 && r1 < r2) {
    startRow = r1;
    startCol = c1;
    endRow = r2;
    endCol = c2;
    return [startRow, startCol, endRow, endCol];
  } else if (c1 === c2 && r1 > r2) {
    startRow = r2;
    startCol = c2;
    endRow = r1;
    endCol = c1;
    return [startRow, startCol, endRow, endCol];
  }

  if (r1 < r2 && c1 < c2) {
    // 4사분면
    startRow = r1;
    startCol = c1;
    endRow = r2;
    endCol = c2;

    return [startRow, startCol, endRow, endCol];
  } else if (r1 > r2 && c1 < c2) {
    // 3사분면
    startRow = r2;
    startCol = c1;
    endRow = r1;
    endCol = c2;

    return [startRow, startCol, endRow, endCol];
  } else if (r1 < r2 && c1 > c2) {
    // 2사분면
    startRow = r1;
    startCol = c2;
    endRow = r2;
    endCol = c1;

    return [startRow, startCol, endRow, endCol];
  } else if (r1 > r2 && c1 > c2) {
    // 1사분면
    startRow = r2;
    startCol = c2;
    endRow = r1;
    endCol = c1;
    return [startRow, startCol, endRow, endCol];
  }
};

/**
 * Bfs
 *
 * merge된 배열의 범위를 찾는다
 *
 * @param {*} cell
 * @param {*} startRow
 * @param {*} startCol
 * @returns
 */
const Bfs = (cell, startRow, startCol) => {
  const value = cell[startRow][startCol];
  startRow = Number(startRow);
  startCol = Number(startCol);
  const queue = [[startRow, startCol]];
  const visited = Array.from(Array(51), () => Array(51).fill(false));
  visited[startRow][startCol] = true;
  let count = 0;
  let result = [];
  while (queue.length) {
    const [row, col] = queue.shift();
    if (row === endRow && col === endCol) {
      return count;
    }

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      const nextRow = row + dx[i];
      const nextCol = col + dy[i];

      if (nextRow < 0 || nextRow >= 51 || nextCol < 0 || nextCol >= 51)
        continue;
      if (visited[nextRow][nextCol]) continue;
      if (cell[nextRow][nextCol] !== value || cell[nextRow][nextCol] === 0)
        continue;
      visited[nextRow][nextCol] = true;
      result.push([nextRow, nextCol]);
      queue.push([nextRow, nextCol]);
    }
    count++;
  }

  return result;
};

function solution(commands) {
  var answer = [];
  const cell = Array.from({ length: 51 }, () => Array(51).fill(0));
  for (let i = 0; i < commands.length; i++) {
    const [command, ...task] = commands[i].split(" ");

    // Update 로직
    if (command === "UPDATE") {
      if (task.length === 3) {
        const [r, c, value] = task;
        const originValue = cell[r][c];
        cell[r][c] = value;
        if (originValue !== 0) {
          for (let i = 0; i < 51; i++) {
            for (let j = 0; j < 51; j++) {
              if (cell[i][j] === originValue) cell[i][j] = value;
            }
          }
        }
      } else {
        const [value1, value2] = task;

        for (let i = 0; i < cell.length; i++) {
          for (let j = 0; j < cell.length; j++) {
            if (cell[i][j] === value1) {
              cell[i][j] = value2;
            }
          }
        }
      }
    }

    // MERGE 로직
    if (command === "MERGE") {
      const [r1, c1, r2, c2] = task;

      if (cell[r1][c1]) {
        let [startRow, startCol, endRow, endCol] = checkDimension(
          r1,
          c1,
          r2,
          c2
        );

        let value2 = cell[r2][c2];

        let beforeMeeged = Bfs(cell, r2, c2);

        for (let i = startRow; i <= endRow; i++) {
          for (let j = startCol; j <= endCol; j++) {
            cell[i][j] = cell[r1][c1];
          }
        }

        for (let i = 0; i < beforeMeeged.length; i++) {
          const [row, col] = beforeMeeged[i];
          cell[row][col] = cell[r1][c1];
        }
      } else {
        let [startRow, startCol, endRow, endCol] = checkDimension(
          r1,
          c1,
          r2,
          c2
        );
        for (let i = startRow; i <= endRow; i++) {
          for (let j = startCol; j <= endCol; j++) {
            cell[i][j] = cell[r2][c2];
          }
        }
      }
    }

    // UMERGE 로직
    if (command === "UNMERGE") {
      const [r, c] = task;
      let value = cell[r][c];
      for (let i = 0; i < cell.length; i++) {
        for (let j = 0; j < cell.length; j++) {
          if (cell[i][j] === value) {
            cell[i][j] = 0;
          }
        }
      }
      cell[r][c] = value;
    }

    // PRINT 로직
    if (command === "PRINT") {
      const [r, c] = task;
      if (cell[r][c] !== 0) {
        answer.push(cell[r][c]);
      } else {
        answer.push("EMPTY");
      }
    }
  }

  return answer;
}
console.log(
  solution([
    "UPDATE 1 1 menu",
    "UPDATE 1 2 category",
    "UPDATE 2 1 bibimbap",
    "UPDATE 2 2 korean",
    "UPDATE 2 3 rice",
    "UPDATE 3 1 ramyeon",
    "UPDATE 3 2 korean",
    "UPDATE 3 3 noodle",
    "UPDATE 3 4 instant",
    "UPDATE 4 1 pasta",
    "UPDATE 4 2 italian",
    "UPDATE 4 3 noodle",
    "MERGE 1 2 1 3",
    "MERGE 1 3 1 4",
    "UPDATE korean hansik",
    "UPDATE 1 3 group",
    "UNMERGE 1 4",
    "PRINT 1 3",
    "PRINT 1 4",
  ])
); // ["EMPTY", "group"]

// console.log(
//   solution([
//     "UPDATE 1 1 a",
//     "UPDATE 1 2 b",
//     "UPDATE 2 1 c",
//     "UPDATE 2 2 d",
//     "MERGE 1 1 1 2",
//     "MERGE 2 2 2 1",
//     "MERGE 2 1 1 1",
//     "PRINT 1 1",
//     "UNMERGE 2 2",
//     "PRINT 1 1",
//   ])
// ); // ["d", "EMPTY"]
