import Vue from 'vue'
import Vuex from '../../../../src/js/lib/vuex'
import {
	mutations
} from '../../../../src/js/store/todo/mutations'
import SYSCONF from '../../../../src/js/util/config'
Vue.use(Vuex)
describe('mutations > ', () => {

	let completeItem, activeItem, store,
		initState = {
			todos: [],
			bar: SYSCONF.ALL,
			readOnly: false
		}
	beforeEach(() => {
		completeItem = {
			value: 'zhangsan',
			type: 'complete'
		}
		activeItem = {
			value: 'lisi',
			type: 'active'
		}
		store = new Vuex.Store({
			state: {
				todos: [],
				bar: SYSCONF.ALL,
				readOnly: false
			},
			mutations
		})
	});

	afterEach(function() {
		store.replaceState(initState);
	});
	it('create', () => {
		store.commit('create', completeItem)
		expect(store.state.todos[0].value).toEqual(completeItem.value);
		expect(store.state.todos[0].type).toEqual(completeItem.type);
	})
	it('del', () => {
		store.commit('create', completeItem)
		store.commit('del', store.state.todos[0])

		expect(store.state.todos).toEqual([])
	})
	it('delByType', () => {
		store.commit('create', completeItem)
		store.commit('create', activeItem)
		store.commit('delByType', 'complete')
		expect(store.state.todos[0]).toEqual(activeItem);
	});
	it('update', () => {
		store.commit('create', completeItem)
		const currentTodo = store.state.todos[0]
		store.commit('update', {
			todo: currentTodo,
			value: 'updateInfo'
		})
		expect(store.state.todos[0].value).toBe('updateInfo');
	});
	it('toggleread > ', () => {
		store.commit('toggleRead')
		expect(store.state.readOnly).toEqual(true)
	});
	describe('toggle active and complete > ', () => {
		it('to active', () => {
			store.commit('create', completeItem)
			const currentTodo = store.state.todos[0]
			store.commit('toggle', currentTodo)
			currentTodo.type = 'active'
			expect(store.state.todos[0].type).toBe(currentTodo.type);
		});
		it('to complete', () => {
			store.commit('create', activeItem)
			const currentTodo = store.state.todos[0]
			store.commit('toggle', currentTodo)
			currentTodo.type = 'complete'
			expect(store.state.todos[0].type).toBe(currentTodo.type);
		});
	});
	describe('toggleAll active and complete > ', () => {
		beforeEach(() => {
			store.commit('create', completeItem)
			store.commit('create', activeItem)
		});
		it('to active', () => {
			store.commit('toggleAll', false)
			const currentTodos = store.state.todos
			expect(currentTodos[0].type).toEqual('active');
			expect(currentTodos[1].type).toEqual('active');
		});
		it('to complete', () => {
			store.commit('toggleAll', true)
			const currentTodos = store.state.todos
			expect(currentTodos[0].type).toEqual('complete');
			expect(currentTodos[1].type).toEqual('complete');
		});
	});
});