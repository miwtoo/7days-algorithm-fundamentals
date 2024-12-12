import { test, expect } from "vitest";
import { isValid } from "../day4";

test("should validate single pair", () => {
	expect(isValid("()")).toBe(true);
});

test("should validate multiple pairs", () => {
	expect(isValid("()[]{}")).toBe(true);
});

test("should invalidate mismatched pair", () => {
	expect(isValid("(]")).toBe(false);
});

test("should invalidate incorrect order", () => {
	expect(isValid("({)}")).toBe(false);
});

test("should validate nested pairs", () => {
	expect(isValid("([{}])")).toBe(true);
});
