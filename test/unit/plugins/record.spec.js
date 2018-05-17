import Vue from 'vue'
import Vuex from '../../../src/js/lib/vuex'
import Record from '../../../src/js/plugins/record'
import SYSCONF from '../../../src/js/util/config'
import todo from '../../../src/js/store/todo'
import history from '../../../src/js/store/history'
Vue.use(Vuex)

describe('record > ', () => {
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
			todo: {
				todos: [],
				bar: SYSCONF.ALL,
				readOnly: false
			},
			history: {
				acts: [],
				point: -1
			}
		};
	beforeEach(() => {
		store = new Vuex.Store({
			plugins: [Record],
			modules: {
				history,
				todo
			}
		})
	});
	afterEach(() => {
		store.replaceState(initData)
	});
	it('normal input task', () => {
		store.dispatch('todo/newTodo', completeItem).then(() => {
			expect(store.state.history.acts.length).toBe(1);
		})
	});
	it('not record action', () => {
		store.dispatch('todo/newTodo', completeItem).then(() => {
			store.dispatch('history/changeAction', 'UNDO').then(() => {
				expect(store.state.todo.todos.length).toEqual(0);
			})
		})
	});
	it('not lastPosition, insert new Todo', () => {
		(async function() {
			await store.dispatch('todo/newTodo', activeItem)
			await store.dispatch('todo/newTodo', activeItem)
			await store.dispatch('history/changeAction', 'UNDO')
			await store.dispatch('todo/newTodo', completeItem)
			expect(store.state.history.point).toBe(1);
		}())
	});
});