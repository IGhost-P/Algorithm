const strToArr = (s) => {
  const sLen = s.length;
  arr = [];
  sub = [];
  cnt = 0;
  // arr.push(3)
  for (let i = 0; i < sLen; i++) {
    if (s[i] === "}" && sub.length > 0) {
      arr[cnt] = [];
      arr[cnt].push(sub);
      sub = [];
      cnt++;
    }
    console.log(sub);

    if (!isNaN(s[i])) {
      sub.push(s[i]);
    }
  }
  return arr;
};

function solution(s) {
  var answer = [];
  console.log(strToArr(s));
  // console.log(s.sort((a,b) => a.length - b.length))
  return answer;
}

solution("{{2,2},{2,3}}");
