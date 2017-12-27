import {
	capitalize
} from '../../../src/js/filters/capitalize'
describe('capitalize >', () => {
	it('capitalize first alphabet', () => {
		expect(capitalize('all')).toBe('All');
	});
});