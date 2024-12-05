function findArrayShiftPoint(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2);

		if (arr[mid] > arr[mid + 1]) return mid + 1;
		if (arr[mid] > arr[right]) left = mid;
		else if (arr[mid] < arr[left]) right = mid;
		else return 0;
	}
}

export function findMin(arr) {
	const startedPoint = findArrayShiftPoint(arr);

	return arr[startedPoint];
}
