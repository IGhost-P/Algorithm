let input = require("fs").readFileSync("예제.txt").toString().split(" ");
let as = false,
  de = false;
input.reduce((prv, cur) => {
  if (prv < cur) as = true;
  if (prv > cur) de = true;
  return (prv = cur);
});

as && !de && console.log("ascending");
de && !as && console.log("descending");
as && de && console.log("mixed");
