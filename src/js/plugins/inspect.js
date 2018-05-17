export default store => {
	const NOTLOCKACTIONS = ["todo/restore", "todo/lockActions"]
	// before action
	store.subscribeBeforeAction((action, state) => {
		if (state.todo.readOnly) {
			// 符合要求的请求，返回false
			// 都不符合，返回true
			return !(NOTLOCKACTIONS.every((item) => {
				if (action.type === item) {
					return false;
				} else {
					return true
				}
			}))
		}

	})
}