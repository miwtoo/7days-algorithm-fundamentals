import { expect, test } from 'vitest'
import { findDuplicateNumber } from '../day1'



test('should identify the duplicated number in a list', () => {
    expect(findDuplicateNumber([1, 2, 3, 3, 4])).toBe(3)
});


test('should return -1 when there are no duplicate numbers in the list', () => {
    expect(findDuplicateNumber([1, 2, 3, 4])).toBe(-1)
});