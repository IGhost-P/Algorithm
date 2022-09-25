// /**
//  * checkSize
//  * 인자값으로 주어진 value(원소수)보다 큰 2의 거듭제곱중 가장 작은 값을 구해주는 함수
//  *
//  * @param {Number} value : 원소
//  * @returns {Number} n : 2의 거듭제곱의 승
//  */
//  const checkSize = (value) => {
//     let n = 0;
//     while(value > 2 ** n){
//         n++
//     }
//     return n
// }

// /**
//  * solution
//  * queries를 가지고 복사된 원소의 개수를 구하는 함수
//  *
//  * 원소의 개수를 복사해야하는지는 크게 2가지로 나뉜다
//  * 1. 초기화 할때 (복사가 이루어지지 않음)
//  * 2. 기존에 값이 있을때
//  *  2-1. 기존 원소 + 새로 들어온 원소가 배열의 크기보다 큰경우 => 복사 후 갱신
//  *  2-2. 기존 원소 + 새로운 원소가 배열의 크기보다 작은 경우 => 복사 없이 갱신
//  *
//  * @param {Array} queries : [배열 번호, 추가원소의수] 로 들어오는 배열
//  * @returns {number} answer : 총 복사된 원소의 수를 나타냄
//  */
// function solution(queries) {
//     var answer = 0;

//     // 1. 배열 번호가 순서대로 들어오는게 아니기 때문에 해쉬 테이블을 이용하기 위해 Map객체를 사용한다
//     const map = new Map();

//     // 2. queries를 순회하면서 각 queries에 로직을 맞춘다
//     for( let i = 0; i < queries.length; i++){
//         const [key, value] = queries[i]

//         // 3. 초기화 여부를 따진다, 초기화 인 경우에는 복사가 이루어지지 않고 등록만 해준다
//         if(!map.has(key)){
//             let size = checkSize(value);
//             map.set(key, [size, value]);
//             continue;
//         }

//         // 4. 초기화가 아니라 기존에 값이 있는경우엔느 2가지 경우로 나눈다
//         const [size, value2] = map.get(key);

//         // 4-1. 기존 원소 + 새로운 원소의 값의 size가 더 큰 경우 => 복사(answer에 값을 저장)후 새로운 값을 갱신해준다
//         if(size < checkSize(value + value2)){
//             map.set(key, [checkSize(value), value + value2]);
//             answer += value2

//         }else{ // 4-2. 기존 원소 + 새로운 원소의 값이 size보다 작은 경우 => 복사 없이 새로운 값을 갱신해준다
//             map.set(key, [size, value + value2])
//         }
//     }
//     return answer;
// }

// /**
//  * checkBadword
//  *
//  * 비속어 단어 사전과 일치하는지 확인하는 함수
//  *
//  * @param {Array} dic : 비속어 사전
//  * @param {String} badword : 검사할 채팅
//  * @returns {Boolean} 일치여부
//  */
//  const checkBadword = (dic, badword) => {
//     let result = false
//     dic.forEach(value => {
//         if(value === badword){
//             result = true
//         }
//     })
//     return result
// }

// /**
//  * chekcDot
//  *
//  * 점이 몇개 있는지 확인하는 함수
//  *
//  * @param {String} word : 검사할 채팅
//  * @returns {Number} count : 점 개수
//  */
// const chekcDot = (word) => {
//     let count = 0;
//     for(let i = 0; i < word.length; i++){
//         if(word[i] === '.'){
//             count++
//         }
//     }
//     return count
// }

// /**
//  * splitDic
//  *
//  * 검사할 채팅에 점이 있고, 점이외의 단어들로 비속어 사전의 비속어를 지웠을때, 남은 단어가 점으로 대체 될수 있는지 확인하는 함수
//  *
//  * @param {Array} dic : 비속어 사전
//  * @param {String} word : 검색할 채팅
//  * @param {Number} k : 점이 대체할수 있는 단어의 길이
//  * @returns {Boolean} 검사 여부
//  */

// const splitDic = (dic, word, k) => {
//     let result = []
//     let wordArr = word.split('.')
//     let count = chekcDot(word)

//     // 1. 점 이외의 단어들로 비속어 사전의 비속어들을 지운다
//     result = dic.map(bad => {
//         let temp = bad
//         for(let i = 0 ; i < wordArr.length ; i++){
//             temp = temp.replace(wordArr[i], '')
//         }

//         if (temp === bad) return temp = ''
//         return temp
//     })
//     result = result.filter(el => el)
//     resultLent = result.length

//     // 2. 비속어 사전에서 비속어의 최소 길이를 구한다
//     let dicMin = Infinity
//     dic.forEach(el => {
//         if(dicMin > el.length) dicMin = el.length
//     })

//     // 3. 만약 점으로만 비속어를 만들수 있더면 => 비속어
//     if(wordArr.filter(el=> el).length == 0 && k * count >= dicMin){
//         return true
//     }

//     // 4. 만약 점이 k개 미만의 단어로 대체한 한 단어가 비속어가 될수 있다면 => 비속어
//     if(result[0]?.length <= k * count){
//         return true
//     }

//     // 5. 대체할수 없다면 비속어가 아니다
//     return false
// }

// /**
//  * solution
//  *
//  * 비속어 판단 여부를 따지는 함수
//  *
//  * 1. 검사할 채팅이 비속어인 경우 => 비속어로 처리
//  * 2. 검사할 채팅이 비속어가 아닌경우
//  *  2-1. 점이 없는 경우 => 올바른 채팅
//  *  2-2. 점이 있는 경우
//  *      2-2-1. 점으로 비속어가 대체 가능한 경우 => 비속어
//  *      2-2-2. 점으로 비속어 대체가 불가능한 경우 => 올바른 채팅
//  *
//  * @params {object} k, dic, chat 입력 인자
//  * @return {String} 결과
//  */
// function solution(k, dic, chat) {
//   var answer = []
//   chat = chat.split(' ')
//   for(let i = 0 ; i < chat.length; i++){
//         if(checkBadword(dic, chat[i])){
//             answer.push('#'.repeat(chat[i].length))
//             continue
//         }

//         if(!chekcDot(chat[i]) > 0){
//             answer.push(chat[i])
//             continue
//         }

//         if(splitDic(dic, chat[i], k)){
//             answer.push('#'.repeat(chat[i].length))
//         }else{
//             answer.push(chat[i])
//         }
//   }
//   return answer.join(' ');
// }

/**
 *
 *
 * @param {*} n
 * @param {*} m
 * @param {*} fires
 * @param {*} ices
 * @returns
 */

const firesArea = (n, m, fires) => {
  result = [];
  let village = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < fires.length; i++) {
    let [y, x] = fires[i];
    x -= 1;
    y -= 1;
    // console.log(x, y);
    startX = x - m > 0 ? x - m : 0;
    endX = x + m < n ? x + m : n;
    startY = y - m > 0 ? y - m : 0;
    endY = y + m < n ? y + m : n;

    for (let j = startY; j <= endY; j++) {
      tempy = Math.abs(m - j);
      for (let k = startX; k <= endX; k++) {
        tempX = Math.abs(m - k);
        village[j][k] += tempX + tempy;
      }
    }

    result.push(...village);
  }
  console.log(result);
  return result;
};

const icesArea = (n, m, ices) => {
  result = [];
  let village = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < ices.length; i++) {
    let [y, x] = ices[i];
    x -= 1;
    y -= 1;
    startX = x - n > 0 ? x - n : 0;
    endX = x + n < n ? x + n : n;
    startY = y - n > 0 ? y - n : 0;
    endY = y + n < n ? y + n : n;
    let maxCount = m + 1;
    let queue = [[y, x]];
    let visited = Array.from(Array(n), () => Array(n).fill(false));
    visited[y][x] = true;
    while (maxCount > 0) {
      let temp = [];
      for (let j = 0; j < queue.length; j++) {
        let [y, x] = queue[j];
        village[y][x] += -maxCount;
        if (y - 1 >= 0 && !visited[y - 1][x]) {
          temp.push([y - 1, x]);
          visited[y - 1][x] = true;
        }
        if (y + 1 < n && !visited[y + 1][x]) {
          temp.push([y + 1, x]);
          visited[y + 1][x] = true;
        }
        if (x - 1 >= 0 && !visited[y][x - 1]) {
          temp.push([y, x - 1]);
          visited[y][x - 1] = true;
        }
        if (x + 1 < n && !visited[y][x + 1]) {
          temp.push([y, x + 1]);
          visited[y][x + 1] = true;
        }
      }
      queue = temp;
      maxCount--;
    }
    result.push(...village);
  }
  return result;
};

function solution(n, m, fires, ices) {
  var answer = [];

  for (let i = 0; i < m; i++) {
    let village = firesArea(n, i, fires);
    let village2 = icesArea(n, i, ices);

    for (let j = 0; j < village.length; j++) {
      for (let k = 0; k < village.length; k++) {
        village[j][k] += village2[j][k];
      }
    }
    // answer.push(village);
  }
  return answer;
}
console.log(solution(3, 3, [[1, 1]], [[3, 3]])); // [[2, 2, 0], [2, 1, -1], [0, -1, -1]]
