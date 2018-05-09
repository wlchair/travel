import DB from '../util/db'

export default store => {
	let currentState
	store.subscribeAfterMutation((mutations, state) => {
		const formatTodos = JSON.stringify(state.todo.todos)
		DB.updateInfo(formatTodos).catch((ret) => {
			throw new Errow(ret)
		})
	})
}