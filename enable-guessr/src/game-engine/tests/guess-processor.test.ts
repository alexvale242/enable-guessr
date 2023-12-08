import { describe, expect, it } from 'vitest';
import guessProcessor from '../processors/guess-processor';

describe('guessPage', () => {
    it('returns false if given no input', () => {
        const result = guessProcessor.guessPage();

        expect(result).toBe(false);
    });
})