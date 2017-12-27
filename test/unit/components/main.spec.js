import Vue from 'vue'
import viewHeader from '../../../src/js/components/main.vue'
import store from '../../../src/js/store'
describe('main.vue > ', () => {
	let c, vm
	beforeEach(() => {
		c = Vue.extend(viewHeader)
		vm = new c({
			store
		}).$mount()
		return vm
	});
	afterEach(function() { 
		vm = c = null
	});
	it('computed > checkboxStatus', () => {
		expect(vm.checkboxStatus).toEqual(false);
		
	});
});