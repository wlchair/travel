import SYSCONF from '../util/config'
export const getters = {
	todosByType(state) {
		const todos = state.todos
		if (state.bar === SYSCONF.ALL) {
			return todos
		} else {
			return todos.filter(todo => {
				return todo.type === state.bar
			})
		}
	}
}