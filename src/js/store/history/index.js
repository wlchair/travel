import {
	mutations
} from './mutations'
import {
	getters
} from './getters'
import {
	actions
} from './actions'

export default {
	namespaced: true,
	state: {
		// cmds:[{
		// 	type: '动作类型'
		// }]
		cmds: [],
		// acts: [{
		// 	before: '之前的状态'
		// 	now: '当前的状态'
		// }]
		acts: [],
		point: -1
	},
	getters,
	mutations,
	actions
}