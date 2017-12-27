import Vue from 'vue'
import Vuex from 'vuex'
import {
	actions
} from '../../../src/js/store/actions'
import {
	mutations
} from '../../../src/js/store/mutations'
import SYSCONF from '../../../src/js/util/config'
// const actionsInjector = require('inject-loader!../../../src/js/store/actions')
Vue.use(Vuex)

// const mockActions = actionsInjector({
// 	'../util/db': {
// 		fetchAllInfo() {
// 			new Promise((resolve, reject) => {
// 				var data = store.state.todos
// 				if (data.length) {
// 					resolve(data)
// 				} else {
// 					reject(data)
// 				}

// 			})
// 		}
// 	}
// })
describe('actions > ', () => {
	let completeItem, activeItem, store
	beforeEach(() => {
		completeItem = {
			value: 'one',
			type: 'complete'
		}
		activeItem = {
			value: 'two',
			type: 'active'
		}
		store = new Vuex.Store({
			state: {
				todos: [],
				bar: SYSCONF.ALL
			},
			mutations,
			actions
		})
	})
	afterEach(() => {
		store.state.todos = []
	});
	it('newTodo', () => {
		return store.dispatch('newTodo', completeItem).then(() => {
			expect(store.state.todos[0]).toEqual(completeItem);
		})
	});
	it('reduceTodo', () => {
		store.commit('create', completeItem)
		return store.dispatch('reduceTodo', completeItem).then(() => {
			expect(store.state.todos.length).toBe(0);
		})
	});
	it('reduceTodosByType', () => {
		store.commit('create', completeItem)
		store.commit('create', activeItem)
		return store.dispatch('reduceTodosByType', 'complete').then(() => {
			expect(store.state.todos[0].type).toBe('active');
		})
	});
	it('modifyTodo', () => {
		store.commit('create', completeItem)
		const currentTodo = store.state.todos[0]
		return store.dispatch('modifyTodo', {
			todo: currentTodo,
			value: 'updateInfo'
		}).then(() => {
			expect(store.state.todos[0].value).toBe('updateInfo');
		})
	});
	describe('modifyState and modifyAllState', () => {
		it('modifyAllState', () => {
			store.commit('create', completeItem)
			store.commit('create', activeItem)
			return store.dispatch('modifyAllState', 'active').then(() => {
				const currentTodos = store.state.todos
				expect(currentTodos[0].type).toEqual('active');
				expect(currentTodos[1].type).toEqual('active');
			})
		})
		it('modifyState', () => {
			store.commit('create', activeItem)
			return store.dispatch('modifyState', activeItem).then(() => {
				expect(store.state.todos[0].type).toEqual('complete');
			})
		})
	})
	describe('restore > ', () => {
		// beforeEach(() => {
		// 	store.commit('create', activeItem)
		// })
		// it('sure', () => {
		// 	store.dispatch('restore')
		// 	expect(store.state.todos[0]).toEqual(activeItem);
		// })
	// 	it('error', () => {

	// 	});
	});
});