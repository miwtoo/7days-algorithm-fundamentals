import { expect, test } from 'vitest'
import { add } from '../day0'

test('should sum the series up to 1', () => {
    expect(add(1)).toBe(1);
});

test('should sum the series up to 2', () => {
    expect(add(2)).toBe(3);
});

test('should sum the series up to 3', () => {
    expect(add(3)).toBe(6);
});

test('should sum the series up to 4', () => {
    expect(add(4)).toBe(10);
});

test('should sum the series up to 5', () => {
    expect(add(5)).toBe(15);
});