function solution(wallpaper) {
  var answer = [];

  let maxI = 0,
    maxJ = 0;
  let minI = Infinity,
    minJ = Infinity;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        maxI = Math.max(maxI, i);
        maxJ = Math.max(maxJ, j);
        minI = Math.min(minI, i);
        minJ = Math.min(minJ, j);
      }
    }
  }

  answer = [minI, minJ, maxI + 1, maxJ + 1];

  return answer;
}
