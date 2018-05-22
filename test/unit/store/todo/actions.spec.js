import Vue from 'vue'
import Vuex from '../../../../src/js/lib/vuex'
import {
	actions
} from '../../../../src/js/store/todo/actions'
import {
	mutations
} from '../../../../src/js/store/todo/mutations'
import SYSCONF from '../../../../src/js/util/config'
// const actionsInjector = require('inject-loader!../../../src/js/store/actions')
Vue.use(Vuex)

describe('actions > ', () => {
	let store,
		completeItem = {
			value: 'one',
			type: 'complete'
		},
		activeItem = {
			value: 'two',
			type: 'active'
		},
		initData = {
			todos: [],
			readOnly: false
		}
	beforeAll(() => {
		store = new Vuex.Store({
			state: {
				todos: [],
				readOnly: false
			},
			mutations,
			actions
		})
	})

	afterEach(() => {
		store.replaceState(initData)
	});
	it('newTodo', () => {
		new Promise((resolve) => {
			store.dispatch('newTodo', completeItem)
			resolve()
		}).then(() => {
			expect(store.state.todos[0]).toEqual(completeItem);
		})
	});
	it('reduceTodo', () => {
		new Promise(() => {
			store.commit('create', activeItem)
			store.commit('create', completeItem)
			store.dispatch('reduceTodo', completeItem)
		}).then(() => {
			expect(store.state.todos.length).toBe(1);
		})
	});
	it('reduceTodosByType', () => {
		new Promise(() => {
			store.commit('create', completeItem)
			store.commit('create', activeItem)
			store.dispatch('reduceTodosByType', 'complete');
		}).then(() => {
			expect(store.state.todos[0].type).toBe('active');
		})

	});
	it('modifyTodo', () => {
		new Promise(() => {
			store.commit('create', completeItem)
			const currentTodo = store.state.todos[0]
			store.dispatch('modifyTodo', {
				todo: currentTodo,
				value: 'updateInfo'
			})
		}).then(() => {
			expect(store.state.todos[0].value).toBe('updateInfo');
		})
	});
	describe('modifyState and modifyAllState > ', () => {
		it('modifyState', () => {
			new Promise(() => {
				store.commit('create', activeItem)
				store.dispatch('modifyState', activeItem)
			}).then(() => {
				expect(store.state.todos[0].type).toEqual('complete');
			})
		})
		it('modifyAllState', () => {
			new Promise(() => {
				store.commit('create', completeItem)
				store.commit('create', activeItem)
				store.dispatch('modifyAllState', 'active')
			}).then(() => {
				const currentTodos = store.state.todos
				expect(currentTodos[0].type).toEqual('active');
				expect(currentTodos[1].type).toEqual('active');
			})
		})
	});
	it('modifyActions', () => {
		new Promise(() => {
			store.dispatch('modifyActions')
		}).then(() => {
			store.dispatch('newTodo', completeItem).then(() => {
				expect(store.state.todos).toEqual([]);
			})
		})
	})
	// it('restore', () => {
	// 	new Promise(() => {
	// 		// store.commit('create', completeItem)
	// 		// store.commit('create', activeItem)
	// 		store.dispatch('restore')
	// 	}).then(() => {
	// 		expect(store.state.todos.length).toBe(2)
	// 	})
	// });
});