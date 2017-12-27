import Vue from 'vue'
import Vuex from 'vuex'
import {
	getters
} from '../../../src/js/store/getters'
import {
	mutations
} from '../../../src/js/store/mutations'
import SYSCONF from '../../../src/js/util/config'
Vue.use(Vuex)
describe('getters > ', () => {
	let mockData, len, i, store
	beforeEach(() => {
		mockData = {
			todos: [{
				value: 'one',
				type: 'complete'
			}, {
				value: 'two',
				type: 'active'
			}, {
				value: 'three',
				type: 'complete'
			}]
		};
		store = new Vuex.Store({
			state: {
				todos: mockData.todos,
				bar: SYSCONF.ALL
			},
			getters,
			mutations
		})
	});
	afterEach(() => {
		store.state.todos = []
	});
	it('todosByType all', () => {
		store.state.bar = 'all'
		expect(store.getters.todosByType)
			.toEqual(mockData.todos);
	});
	it('todosByType active or complete', () => {
		store.state.bar = 'active'
		expect(store.getters.todosByType[0]).toEqual(store.state.todos[1]);
	});
});