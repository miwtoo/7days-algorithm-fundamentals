export function flatten(arr) {
	// base case
	if (typeof arr === "number") {
		return [arr];
	}

	// recusive case
	if (typeof arr === "object") {
		if (arr.length === 0) {
			return [];
		}
		const head = arr[0];
		const tail = arr.slice(1);

		return flatten(head).concat(flatten(tail));
	}
}
