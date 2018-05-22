export const mutations = {
	create(state, item) {
		state.acts.push(item)
		state.point++
	},
	updatePoint(state, type) {
		let point = state.point,
		len = state.acts.length;
		switch (type) {
			case 'UNDO':
				// 指针如果大于0，就可以
				// 指针如果等于0，历史数据必须是0，才是减少到-1
				// if (point > 0 ||
				// 	point === 0 && len === 0) {
					--state.point;
				// }
				// else{
				// 	throw new Error('UNDO 已经到头了')
				// }
				break;
			case 'REDO':
				// if (len - 1 > point) {
					++state.point;
				// }
				// else{
				// 	throw new Error('REDO 已经到头了')
				// }
				break;
		}
	},
	updateActs(state) {
		// size - point 
		// -1 point
		// 0 len
		let delIdx = state.point + 1,
			delNum = state.acts.length - delIdx; // size: 2 -
		state.acts.splice(delIdx, delNum)
	},
	showInfo(state) {
		return {
			acts: state.acts,
			point: state.point
		}
	}
}