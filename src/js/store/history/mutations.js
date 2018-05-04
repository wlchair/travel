export const mutations = {
	create(state, {
		cmd,
		act
	}) {
		state.cmds.push(cmd)
		state.acts.push(act)
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
	showInfo(state) {
		return {
			cmds: state.cmds,
			acts: state.actions,
			point: state.point
		}
	}
}