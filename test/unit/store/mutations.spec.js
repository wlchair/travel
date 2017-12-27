import Vue from 'vue'
import Vuex from 'vuex'
import {
	mutations
} from '../../../src/js/store/mutations'
import SYSCONF from '../../../src/js/util/config'
Vue.use(Vuex)
describe('mutations > ', () => {

	let completeItem, activeItem,store

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
				bar: SYSCONF.ALL
			},
			mutations
		})
	});
	afterEach(function() {
		store.state.todos = []
	});
	it('create', () => {
		store.commit('create', completeItem)
		expect(store.state.todos[0]).toEqual(completeItem);
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
	describe('toggle active and complete >', () => {
		it('toggle to active', () => {
			store.commit('create', completeItem)
			const currentTodo = store.state.todos[0]
			currentTodo.type = 'active'
			store.commit('toggle', currentTodo)
			expect(store.state.todos[0].type).toBe(currentTodo.type);
		});
		it('toggle to complete', () => {
			store.commit('create', activeItem)
			const currentTodo = store.state.todos[0]
			currentTodo.type = 'complete'
			store.commit('toggle', currentTodo)
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
	it('fill', () => {
		const data = [completeItem, activeItem]
		store.commit('fill', data)
		expect(store.state.todos).toEqual(data);
	});
});