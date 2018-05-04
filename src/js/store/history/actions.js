export const actions = {
	undoAct({
		commit,
		getters,
		dispatch
	}, type) {
		var item = getters.historyItem(type);
		commit('updatePoint', type)
		dispatch('todo/modifyState', item.act.before, {
			root: true
		}).then(() => {
			console.log('execute over')
		})
	}
}