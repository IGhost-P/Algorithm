const splitWord = (word, firstWord) => {
  const result = [];
  let text = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === firstWord) {
      text += word[i];
    } else {
      result.push(text);
      text = "";
      text += word[i];
      firstWord = word[i];
      continue;
    }
  }
  result.push(text);
  return result;
};

const makeAlphabet = (text) => {
  const alphabet = [];
  for (let i = 0; i < text.length; i++) {
    alphabet.push(String.fromCharCode(64 + text[i].length));
  }
  return alphabet.join("");
};

function solution(src) {
  var answer = "";
  const firstWord = src[0];
  const result = splitWord(src, firstWord);
  answer = firstWord + makeAlphabet(result);
  return answer;
}

console.log(solution("111100100011"));

//리펙토링 필요
class Computers {
  constructor() {
    this.computers = [];
  }
  getComputer(computer) {
    return this.computers[computer];
  }
  setComputer(computer, value) {
    this.computers[computer] = value;
  }
  checkComputer(computer) {
    return this.computers[computer] ? true : false;
  }
  getComputers() {
    return this.computers;
  }
}

class Net {
  constructor(n) {
    this.net = new Array(n).fill(null);
  }
  grantComputer(ip) {
    this.net[ip] = true;
  }
  revokeComputer(ip) {
    this.net[ip] = false;
  }
  findCanIp() {
    return this.net.findIndex((el) => el === null);
  }

  findRecycleIp() {
    return this.net.findIndex((el) => el === false);
  }

  checkIp() {
    return this.findRecycleIp() || this.findCanIp() ? true : false;
  }

  checkUseIp(ip) {
    return this.net[ip] === false ? true : false;
  }

  getNet() {
    return this.net;
  }
}

function solution(n, queries) {
  var answer = [];
  let net = new Net(n);
  let computers = new Computers();
  // console.log(net.getNet(), computers.getComputers());
  queries.forEach((query) => {
    const [user, command] = query.split(" ");
    if (command === "request") {
      // 이미 있는 경우
      if (computers.checkComputer(user)) {
        const ip = computers.getComputer(user);
        if (net.checkUseIp(ip)) {
          answer.push(user + " " + "192.168.0." + Number(ip + 1));
        } else {
          if (net.checkIp()) {
            const ip = net.findCanIp();
            net.grantComputer(ip);
            computers.setComputer(user, ip);
            answer.push(user + " " + "192.168.0." + Number(ip + 1));
          } else {
            answer.push(user + " " + "reject");
          }
        }
      } else if (net.checkIp(user)) {
        let ip = "";
        if (net.findCanIp() !== -1) {
          ip = net.findCanIp();
        } else if (net.findRecycleIp() !== -1) {
          ip = net.findRecycleIp();
        } else {
          answer.push(user + " " + "reject");
          return;
        }

        // console.log(net.getNet(), net.findCanIp());
        net.grantComputer(ip);
        computers.setComputer(user, ip);
        answer.push(user + " " + "192.168.0." + Number(ip + 1));
      } else {
        answer.push(user + " " + "reject");
      }
    } else if (command === "release") {
      const ip = computers.getComputer(user);
      net.revokeComputer(ip);
    }
  });
  return answer;
}
console.log(
  solution(2, [
    "desktop1 request",
    "desktop2 request",
    "desktop1 release",
    "desktop2 release",
    "desktop3 request",
    "desktop3 release",
    "desktop2 request",
    "desktop1 request",
  ])
);

[
  "desktop1 192.168.0.1",
  "desktop2 192.168.0.2",
  "desktop3 192.168.0.1",
  "desktop2 192.168.0.2",
  "desktop1 192.168.0.1",
];

const setMine = (mine, N) => {
  const map = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  mine.forEach((el) => {
    const dx = [0, 0, 1, -1, 1, -1, 1, -1];
    const dy = [1, -1, 0, 0, 1, -1, -1, 1];
    const [row, col] = el;
    map[row][col] = -1;
    for (let i = 0; i < 8; i++) {
      const ny = row + dx[i];
      const nx = col + dy[i];
      if (nx > 0 && nx <= N && ny > 0 && ny <= N) {
        map[ny][nx] += 1;
      }
    }
  });
  return map;
};

const bfs = (N, map, P) => {
  let queue = [];
  let visited = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => false)
  );
  queue.push(P);
  let count = 0;
  while (queue.length) {
    const [row, col] = queue.shift();
    const dx = [0, 0, 1, -1, 1, -1, 1, -1];
    const dy = [1, -1, 0, 0, 1, -1, -1, 1];
    for (let i = 0; i < 8; i++) {
      const ny = row + dx[i];
      const nx = col + dy[i];
      if (nx > 0 && nx <= N && ny > 0 && ny <= N) {
        if (map[ny][nx] === 0) {
          if (!visited[ny][nx]) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
            count++;
          }
        }
        if (map[ny][nx] > 0) {
          if (!visited[ny][nx]) {
            visited[ny][nx] = true;
            count++;
          }
        }
      }
    }
  }
  return count;
};

function solution(N, mine, P) {
  answer = 0;
  const map = setMine(mine, N);
  answer = bfs(N, map, P);
  return answer;
}

console.log(
  solution(
    9,
    [
      [1, 2],
      [2, 6],
      [3, 4],
      [3, 8],
      [4, 9],
      [5, 4],
      [5, 8],
      [6, 7],
      [7, 2],
      [9, 1],
    ],
    [8, 5]
  )
);
