import SYSCONF from '../../util/config'
import {
	getters
} from './getters'
import {
	mutations
} from './mutations'
import {
	actions
} from './actions'


export default {
	namespaced: true,
	state: {
		// {
		//	id: 唯一标识
		// 	type: active,completed
		// 	value
		// }
		todos: [],
		bar: SYSCONF.ALL,
		readOnly: true
	},
	getters,
	mutations,
	actions
}