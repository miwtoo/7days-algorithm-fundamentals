import { expect, test } from 'vitest'
import { findDuplicateNumber } from '../day1'



test('it should be return 3 when [1, 2, 3, 3, 4]', () => {
    expect(findDuplicateNumber([1, 2, 3, 3, 4])).toBe(3)
});


test('it should be retrun -1 when it no duplicate', () => {
    expect(findDuplicateNumber([1, 2, 3, 4])).toBe(-1)
});