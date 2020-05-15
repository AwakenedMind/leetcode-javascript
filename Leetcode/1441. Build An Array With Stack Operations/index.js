/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
	let ops = [];
	let prev = 0;

	for (let i = 1; i <= n; i++) {
		if (i == target[prev]) {
			ops.push('Push');
			prev++;
		} else {
			ops.push('Push');
			ops.push('Pop');
		}

		if (prev === target.length) break;
	}
	return ops;
};
