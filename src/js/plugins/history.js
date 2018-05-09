import CONFIG from '../util/config'
import Clone from '../util/clone'
export default store => {
	let templateHistory = {
		cmd: '',
		before: []
	},historyItem;
	store.subscribeBeforeAction((action, state) => {
		if( action.type === "history/changeAction" ){
			CONFIG.HISTORYACTION = true
			return;
		}
		// restore, undo请求都不进行监听
		// 除此之外，任何动作来源是undo，redo也不进行监听
		if( action.type === "todo/restore" || 
			CONFIG.HISTORYACTION){
			return;
		}
		if(!store.getters['history/isLastPoint']){
			store.commit('history/updateActs')
		}
		historyItem = templateHistory;
		historyItem.cmd = {
			actionType: action.type,
			texts: action.payload
		}
	})
	store.subscribeAfterAction((action, state) => {
		if( action.type === "todo/restore" || 
			CONFIG.HISTORYACTION){
			return;
		}
		historyItem = Clone(historyItem) || {};
		store.commit('history/create', historyItem)
		CONFIG.HISTORYACTION = false
	})
	store.subscribeBeforeMutation((mutations, state) => {
		// console.log(mutations.type)
	})
	store.subscribeAfterMutation((mutations, state) => {
		// console.log(mutations.type)

	})

}