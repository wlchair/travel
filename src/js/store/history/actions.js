import MRT from '../../util/MRT'
export const actions = {
	changeAction({
		commit,
		getters,
		dispatch
	}, type) {
		// 必须放到comit前面，因为功能里面涉及到了指针的信息
		let item = getters.historyItem(type);
		commit('updatePoint', type);
		let oppr = MRT[item.act.cmd.actionType] || {};
		if (type === "UNDO" && oppr.type === "action") {
			dispatch(oppr.name, item.act.cmd.texts, {
				root: true
			}).then(() => {
				console.log('execute over action')
			});
			return;
		}
		if (type === "REDO" ||
			type === "UNDO" && oppr.type === "prop") {
			dispatch(item.act.cmd.actionType, item.act.cmd.texts, {
				root: true
			}).then(() => {
				console.log('execute over prop')
			})
		}
	}
}