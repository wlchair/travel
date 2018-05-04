export default store => {
	// before action
	store.subscribeAction((action, state) => {
		if (action.type === 'newTodo' &&
			typeof parseInt(action.payload.value) === "number") {
			// throw new Error('inspect error')
		}
	})
	store.subscribeAction((action, state) => {
		if (state.readOnly) {
			// throw new Error('readOnly table')
		}
	})
}