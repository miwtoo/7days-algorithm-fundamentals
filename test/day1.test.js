import { expect, test } from 'vitest'
import { add } from '../day1'

test('adds 1 to equal 1', () => {
    expect(add(1)).toBe(1)
});

test('adds 2 to equal 3', () => {
    expect(add(2)).toBe(3)
});

test('adds 3 to equal 6', () => {
    expect(add(3)).toBe(6)
});

test('adds 4 to equal 10', () => {
    expect(add(4)).toBe(10)
});

test('adds 5 to equal 15', () => {
    expect(add(5)).toBe(15)
});