n = 4;
m = 2;
result = [];

// const dfs = (count) => {
//   if (count == m) {
//     console.log(result);
//     return;
//   }

//   for (let i = 1; i <= n; i++) {
//     result.push(i);
//     dfs(count + 1);
//     result.pop();
//   }
// };

// dfs(0);

const dfs = (idx, count) => {
  if (count == m) {
    console.log(result);
    return;
  }
  for (let i = idx; i < n; i++) {
    result.push(i + 1);
    dfs(i, count + 1);
    result.pop();
  }
};

dfs(0, 0);
