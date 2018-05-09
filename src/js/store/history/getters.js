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
			}
		}
	},
	// 判断当前指针是否指向历史的最后一位
	isLastPoint(state){
		let len = state.acts.length;
		let size = state.point + 1
		return len === size
	}
}