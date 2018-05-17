import Vue from 'vue'
import Vuex from '../../../../src/js/lib/vuex'
import {
	getters
} from '../../../../src/js/store/todo/getters'
import SYSCONF from '../../../../src/js/util/config'
Vue.use(Vuex)
describe('getters > ', () => {
	let len, i, store,
		initData = {
			todos: [{
				value: 'one',
				type: 'complete'
			}, {
				value: 'two',
				type: 'active'
			}, {
				value: 'three',
				type: 'complete'
			}],
			bar: SYSCONF.ALL,
			readOnly: false
		};
	beforeEach(() => {
		store = new Vuex.Store({
			state: {
				todos: [{
					value: 'one',
					type: 'complete'
				}, {
					value: 'two',
					type: 'active'
				}, {
					value: 'three',
					type: 'complete'
				}],
				bar: SYSCONF.ALL,
				readOnly: false
			},
			getters
		})
	});
	afterEach(() => {
		store.replaceState(initData)
	});
	describe('todosByType > ', () => {
		it('all', () => {
			expect(store.getters.todosByType)
				.toEqual(initData.todos);
		});
		it('active or complete', () => {
			store.state.bar = 'active'
			expect(store.getters.todosByType[0]).toEqual(store.state.todos[1]);
		});
	})
});