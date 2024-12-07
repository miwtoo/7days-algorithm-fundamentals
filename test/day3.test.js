import { test, expect } from "vitest";
import { flatten } from "../day3";

test("should flatten a simple nested array with one level of nesting", () => {
	const input = [1, [2]];
	const result = [1, 2];
	expect(flatten(input)).toEqual(result);
});

test("should flatten a deeply nested array with mixed levels of nesting", () => {
	const input = [1, [2], [[3], 4], [[[[5]]]]];
	const result = [1, 2, 3, 4, 5];
	expect(flatten(input)).toEqual(result);
});

test("should flatten a deeply nested array with a single value", () => {
	const input = [[[[[[10]]]]]];
	const result = [10];
	expect(flatten(input)).toEqual(result);
});
