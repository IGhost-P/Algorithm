const arr = [1, 2, 3, 4];
const r = 2;

const result = Array.from({ length: r }).fill(0);
const check = Array.from({ length: r }).fill(false);

const dfsP = (level) => {
	if (level === r) {
		console.log(result);
		return;
	}

	for (let i = 0; i < arr.length; i++) {
		if (check[i]) continue;
		result[level] = arr[i];
		check[i] = true;
		dfsP(level + 1);
		// check[i] = false;
	}
};

console.log(dfsP(0));
