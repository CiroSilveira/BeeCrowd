let testCases = lines.shift();
testCases = parseInt(testCases);

for (let count = 0; count < testCases; count++) {
	let [first, second] = lines.shift().split(" ");
	first = parseInt(first);
	second = parseInt(second);
	console.log(`${first + second}`);
}