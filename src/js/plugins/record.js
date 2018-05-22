import CONFIG from '../util/config'
import Clone from '../util/clone'
import {
	isMatch
} from '../util/judge'
export default store => {
	let historyItem;
	store.subscribeBeforeAction((action, state) => {
		console.log(store.state.todo.bar)
		console.log(action.type)
		CONFIG.NOTRECORDACTIONS.every((item) => {
			if (action.type === item) {
				CONFIG.RECORDACTION = false;
				return false
			} else {
				return true
			}
		})
		// restore, undo请求都不进行监听
		// 除此之外，任何动作来源是undo，redo也不进行监听
		if (!CONFIG.RECORDACTION) {
			return;
		}
		// 确认指针是否在history的末尾
		if (!store.getters['history/isLastPoint']) {
			// 如果不是在末尾，删除指针后面的记录
			store.commit('history/updateActs')
		}
		historyItem = {
			cmd: {
				actionType: action.type,
				texts: action.payload
			},
			before: {}
		}
	})
	store.subscribeAfterAction((action, state) => {
		if (CONFIG.RECORDACTION) {
			store.commit('history/create', historyItem)
		}
		// 只有不记录列表中的action
		// 才能修改是否记录的行为状态
		CONFIG.NOTRECORDACTIONS.every((item) => {
			if (action.type === item) {
				CONFIG.RECORDACTION = true;
				return false;
			} else {
				return true
			}
		})
	})
	store.subscribeBeforeMutation((mutations, state) => {
		CONFIG.NOTRECORDMUTATION.every((item) => {
			if (isMatch(item, mutations.type)) {
				CONFIG.RECORDMUTATION = false;
				return false;
			} else {
				return true;
			}
		})
		// 记录行为 并且 记录commit才执行
		if (CONFIG.RECORDACTION && CONFIG.RECORDMUTATION) {
			historyItem.before = Clone(mutations.payload);
		}
	})
	store.subscribeAfterMutation((mutations, state) => {
		CONFIG.NOTRECORDMUTATION.every((item) => {
			if (isMatch(item, mutations.type)) {
				CONFIG.RECORDMUTATION = true;
				return false;
			} else {
				return true
			}
		})
	})
}