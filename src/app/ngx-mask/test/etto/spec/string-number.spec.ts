import 'jasmine';
import { strNumberLastPosition } from '../../../number-string';

describe('Directive: Mask', () => {
    [
        { val: '1 a sff', tobe: 1, tobestr: '1' },
        { val: 'rrtt 44. tt', tobe: 7, tobestr: 'rrtt 44' }
    ].map((test: { val: string, tobe: number, tobestr: string }) => {
        it('strNumberLastPosition ', () => {
            const position: number = strNumberLastPosition(test.val);
            expect(position).toBe(test.tobe);
            expect(test.val.substr(0, position)).toBe(test.tobestr);
        });
        return '';
    });
});