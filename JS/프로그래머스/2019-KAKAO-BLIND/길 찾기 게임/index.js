// // function solution(nodeinfo) {
// //   var answer = [[]];
// //   let nodes = [];
// //   for (let i = 0; i < nodeinfo.length; i++) {
// //     nodes.push({ x: nodeinfo[i][0], y: nodeinfo[i][1], idx: i + 1 });
// //   }
// //   nodes.sort((a, b) => {
// //     if (a.y === b.y) return a.x - b.x;
// //     return b.y - a.y;
// //   });
// //   let root = nodes[0];
// //   for (let i = 1; i < nodes.length; i++) {
// //     let node = nodes[i];
// //     let cur = root;
// //     console.log(node);
// //     while (true) {
// //       if (node.x < cur.x) {
// //         if (cur.left) cur = cur.left;
// //         else {
// //           cur.left = node;
// //           break;
// //         }
// //       } else {
// //         if (cur.right) cur = cur.right;
// //         else {
// //           cur.right = node;
// //           break;
// //         }
// //       }
// //     }
// //   }
// //   let pre = [];
// //   let post = [];
// //   function preorder(node) {
// //     pre.push(node.idx);
// //     if (node.left) preorder(node.left);
// //     if (node.right) preorder(node.right);
// //   }
// //   function postorder(node) {
// //     if (node.left) postorder(node.left);
// //     if (node.right) postorder(node.right);
// //     post.push(node.idx);
// //   }
// //   preorder(root);
// //   postorder(root);
// //   answer = [pre, post];
// //   return answer;
// // }

// // console.log(
// //   solution([
// //     [5, 3],
// //     [11, 5],
// //     [13, 3],
// //     [3, 5],
// //     [6, 1],
// //     [1, 3],
// //     [8, 6],
// //     [7, 2],
// //     [2, 2],
// //   ])
// // );

let pre = [];
let post = [];

const sortNode = (nodeinfo) => {
  nodeinfo = nodeinfo.map((el, idx) => {
    return { x: el[0], y: el[1], idx: idx + 1 };
  });

  return nodeinfo.sort((a, b) => {
    if (a.y === b.y) {
      return a.x - b.x;
    }
    return b.y - a.y;
  });
};

const setTree = (nodes) => {
  let nodeLen = nodes.length;
  let root = nodes[0];

  for (let i = 1; i < nodeLen; i++) {
    let node = nodes[i];
    let cur = root;
    while (true) {
      if (node.x < cur.x) {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = node;
          break;
        }
      } else {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = node;
          break;
        }
      }
    }
  }

  return nodes;
};

const preOrder = function (node) {
  pre.push(node.idx);
  if (node.left) preOrder(node.left);
  if (node.right) preOrder(node.right);
};

const postOrder = function (node) {
  if (node.left) postOrder(node.left);
  if (node.right) postOrder(node.right);
  post.push(node.idx);
};

function solution(nodeinfo) {
  var answer = [[]];
  let nodes = sortNode(nodeinfo);
  nodes = setTree(nodes);
  let root = nodes[0];
  preOrder(root);
  postOrder(root);
  answer = [pre, post];
  return answer;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);

// const temp = function () {
//   console.log(this);
// };

// const solu = function () {
//   const a = "a";
//   temp.bind(a);
//   temp.call(a);
// };

// solu();
