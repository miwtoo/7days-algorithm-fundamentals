function isValidParentheses(text) {
	if (text.includes("()") || text.includes("[]") || text.includes("{}")) {
		return true;
	}
	return false;
}

export function isValid(str) {
	const arrayString = str.split("");
	const stack = [];

	let i = 0;

	while (arrayString.length > 0) {
		stack.push(arrayString.pop());

		if (i >= 1 && isValidParentheses(stack.at(-1) + stack.at(-2))) {
			stack.pop();
			stack.pop();
		}
		i++;
	}

	if (stack.length === 0) return true;
	return false;
}
