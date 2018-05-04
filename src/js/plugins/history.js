export default store => {
	let preTodo, nextTodo;
	// after mutation
	store.subscribe((mutations, state) => {
		nextTodo = mutations.payload

		if (mutations.type === "todo/toggle") {
			store.commit('history/create', {
				cmd: {
					type: 'toggle',
				},
				act: {
					before: preTodo,
					now: nextTodo
				}
			})
		}
	})

	store.subscribeAction((action, state) => {
		preTodo = action.payload;
	})
}