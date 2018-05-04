import DB from '../util/db'

export default store => {
	let currentState
	store.subscribe((mutations, state) => {
		if (!currentState) {
			currentState = Object.assign(state.todo.todos[0])
		} else if (currentState != state.todo.todos[0]) {
			console.log('diff')
		}
		const formatTodos = JSON.stringify(state.todo.todos)
		DB.updateInfo(formatTodos).catch((ret) => {
			throw new Errow(ret)
		})
	})
}