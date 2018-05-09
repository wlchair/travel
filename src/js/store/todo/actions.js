import DB from '../../util/db'

export const actions = {
	newTodo({
		commit
	}, data) {
		return new Promise((resolve, reject) => {
			commit('create', data)
			resolve()
		})
	},
	reduceTodo({
		commit
	}, todo) {
		return new Promise((resolve, reject) => {
			commit('del', todo)
			resolve()
		})
	},
	reduceTodosByType({
		commit
	}, originType) {
		return new Promise((resolve, reject) => {
			commit('delByType', originType)
			resolve()
		})
	},
	modifyTodo({
		commit
	}, payload) {
		return new Promise((resolve, reject) => {
			commit('update', payload)
			resolve()
		})
	},
	modifyState({
		commit
	}, todo) {
		return new Promise((resolve, reject) => {
			commit('toggle', todo)
			resolve()
		})
	},
	modifyAllState({
		commit
	}, originState) {
		return new Promise((resolve, reject) => {
			commit('toggleAll', originState)
			resolve()
		})
	},
	async restore ({
		commit
	}){
		await DB.fetchAllInfo().then((ret) => {
			commit('fill', ret)
		}).catch((ret) => {
			throw new Error(ret)
		})
	}
}