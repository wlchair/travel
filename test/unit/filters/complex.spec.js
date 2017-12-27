import {
	complex
} from '../../../src/js/filters/complex'
describe('complex >', () => {
	it('num less than or equal 1', () => {
		expect(complex(1)).toBe('item');
	});
	it('num more than 1', () => {
		expect(complex(2)).toBe('items');
	});
});