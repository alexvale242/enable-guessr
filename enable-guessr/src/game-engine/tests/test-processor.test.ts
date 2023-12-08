import { describe, expect, it } from 'vitest';
import testProcessor from '../processors/test-processor';

describe('test', () => {
    it('goes what it says on the tin', () => {
        let num = 3;
        num = testProcessor.addOne(num);

        expect(num).toBe(4);
    })
})