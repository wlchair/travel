import MRT from '../../util/MRT'
export const actions = {
	changeAction({
		commit,
		getters,
		dispatch
	}, type) {
		// 必须放到comit前面，因为功能里面涉及到了指针的信息
		let item = getters.itemByType(type);
		if(!item){
			return;
		}
		commit('updatePoint', type);

		// 三类：
		// 1. 通过反向动作还原： 插入todo
		// 2. 通过反向属性还原： toggle
		// 3. 通过覆盖属性还原： 修改数据

		// 有反向行为的action
		let oppr = MRT[item.cmd.actionType];

		if (oppr && oppr.type === "action" && type === "UNDO") {
			dispatch(oppr.name, item.cmd.texts, {
				root: true
			})
			return;
		}
		if (oppr &&
			(type === "REDO" ||
				oppr.type === "prop" && type === "UNDO")) {
			dispatch(item.cmd.actionType, item.cmd.texts, {
				root: true
			})
			return;
		}
		if (!oppr && type === "UNDO") {
			dispatch(item.cmd.actionType, {
				todo: item.before.todo,
				value: item.before.todo.value
			}, {
				root: true
			})
			return;
		}
		if (!oppr && type === "REDO") {
			dispatch(item.cmd.actionType, item.cmd.texts, {
				root: true
			})
			return;
		}

	}
}