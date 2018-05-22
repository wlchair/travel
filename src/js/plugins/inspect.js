export default store => {
	const NOTLOCKACTIONS = ["todo/restore", "todo/modifyActions"]
	// before action
	store.subscribeBeforeAction((action, state) => {
		// console.log(state.todo.readOnly)
		if (state.todo.readOnly) {
			// 符合要求的请求，返回false
			// 都不符合，返回true
			let ret;
			NOTLOCKACTIONS.every((item) => {
				if (action.type === item) {
					ret = true
					return false
				} else {
					ret = false
					return true
				}
			})
			return ret;
		}

	})
}