const dictionary = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const checkDict = (word) => {
  const result = dictionary.findIndex((el) => el === word) + 1;
  if (result) return result;

  dictionary.push(word);
  return false;
};

function solution(msg) {
  var answer = [];
  msg = [...msg];
  let msgLen = msg.length;
  let start = 0;
  let end = 0;
  while (start < msgLen) {
    let resultList = [];
    let result = "";
    let word = "";
    for (let j = start; j < msgLen; j++) {
      word += msg[j];
      // console.log(word, checkDict(word));
      result = checkDict(word);
      // console.log(result, word, start);
      if (result) {
        resultList.push(result);
        start = j;
      }

      if (word && !result) {
        break;
      }
    }
    answer.push(resultList[resultList.length - 1]);
    start++;
  }
  return answer;
}

console.log(solution("KAKAO"));
