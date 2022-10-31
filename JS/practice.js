class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }

  has(string) {
    let currNode = this.root;

    for (const char of string) {
      if (!currNode.children.has(char)) {
        return false;
      }
      currNode = currNode.children.get(char);
    }
    return currNode;
  }

  insert(string) {
    let currNode = this.root;
    const word = string;

    for (const char of word) {
      if (!currNode.children.has(char)) {
        currNode.children.set(char, new Node(currNode.value + char));
      }
      currNode = currNode.children.get(char);
    }
  }

  autoComplete(string) {
    const currNode = this.has(string);
    if (!currNode) return [];

    const words = [];
    const queue = [currNode];

    while (queue.length) {
      const currNode = queue.shift();

      if (currNode.children.size === 0) {
        words.push(currNode.value);
      }

      for (const child of currNode.children.values()) {
        queue.push(child);
      }
    }

    return words;
  }
}

// 트라이 생성
const trie = new Trie();
trie.insert("cat");
trie.insert("cats");
trie.insert("can");
trie.insert("candy");

// 자동 완성 테스트
console.log("입력: ca, 결과: ", trie.autoComplete("ca")); //['cat', 'can', 'cats', 'candy']
console.log("입력: cat, 결과: ", trie.autoComplete("cat")); //['cat', 'cats']
console.log("입력: candy, 결과: ", trie.autoComplete("candy")); //['candy']
console.log("입력: ct, 결과: ", trie.autoComplete("ct")); //null
console.log("입력: dog, 결과: ", trie.autoComplete("dog")); //null
