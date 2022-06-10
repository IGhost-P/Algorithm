arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arr.forEach((el, idx) => {
  el.forEach((el2, idx2) => {
    console.log(idx, idx2);
    queue = [[2, 2]];
    [idx, idx2] = queue.shift();
  });
});
