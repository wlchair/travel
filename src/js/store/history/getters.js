export const getters = {
	historyItem(state) {
		return function(type) {
			var point;
			switch (type) {
				case 'UNDO':
					point = state.point;
					break;
				case 'REDO':
					point = state.point + 1;
					break;
			}
			return {
				act: state.acts[point],
				cmd: state.cmds[point]
			}
		}
	}
}