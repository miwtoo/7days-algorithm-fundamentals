import { expect, test } from "vitest";
import { findMin } from "../day2";

test("should find the minimum in a shifted sorted list (no shift)", () => {
	expect(findMin([1, 2, 3, 4, 5])).toEqual(1);
});

test("should find the minimum in a shifted sorted list (middle shifted)", () => {
	expect(findMin([4, 5, 6, 2, 3])).toEqual(2);
});

test("should find the minimum in a shifted sorted list (shifted right)", () => {
	expect(findMin([2, 3, 4, 5, 1])).toEqual(1);
});

test("should find the minimum in a shifted sorted list (shifted left)", () => {
	expect(findMin([5, 1, 2, 3, 4])).toEqual(1);
});

test("should find the minimum in a large shifted sorted list (shifted left)", () => {
	expect(
		findMin([
			9769, 9801, 9988, 163, 277, 398, 514, 981, 1005, 1358, 1486, 2047, 2253,
			2336, 2576, 2593, 2914, 3146, 3321, 3769, 4210, 4303, 4315, 4321, 4428,
			4805, 5273, 5436, 5738, 5971, 6017, 6153, 6404, 6419, 6440, 6484, 6763,
			6786, 6879, 7061, 7127, 7247, 8578, 9176, 9700,
		]),
	).toEqual(163);
});

test("should find the minimum in a large shifted sorted list (shifted right)", () => {
	expect(
		findMin([
			1661, 1665, 1756, 1760, 2005, 2172, 2204, 2209, 2329, 2976, 3232, 3587,
			3725, 4332, 4625, 4632, 5058, 5062, 5144, 5194, 6076, 6095, 6203, 6207,
			6418, 6695, 6715, 6747, 6747, 6754, 7047, 7128, 7230, 7519, 7861, 8494,
			8637, 8780, 9065, 9072, 9133, 9152, 9327, 9851, 293, 664, 907, 1109, 1112,
			1475, 1611,
		]),
	).toEqual(293);
});
