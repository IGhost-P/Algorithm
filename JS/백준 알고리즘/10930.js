// SHA-256
test_case = require("fs").readFileSync("예제.txt").toString();
var crypto = require("crypto");
var shasum = crypto.createHash("sha256");
shasum.update(test_case);
var output = shasum.digest("hex");

// 한 번에 쓰는법
//var output = crypto.createHash('sha512').update(id).shasum.digest('hex');

console.log(output);
