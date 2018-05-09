export const mutations = {
	create(state, item) {
		state.acts.push(item)
		state.point++
	},
	updatePoint(state, type) {
		switch (type) {
			case 'UNDO':
				--state.point;
				break;
			case 'REDO':
				++state.point;
				break;
		}
	},
	updateActs() {
		let delIdx = state.point,
			delNum = state.acts.length - 1 - delIdx;
		state.acts.splice(delIdx, delNum, 0)
		console.log(state.point)
		console.log(JSON.stringify(state.acts))
	},
	showInfo(state) {
		return {
			acts: state.acts,
			point: state.point
		}
	}
}