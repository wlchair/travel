import Vue from 'vue'
import Vuex from 'vuex'
import Pstore from '../plugins/storage'
import SYSCONF from '../util/config'
import {
	getters
} from './getters'
import {
	mutations
} from './mutations'
import {
	actions
} from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [Pstore],
	state: {
		// {
		// 	type: active,completed
		// 	value
		// }
		todos: [],
		bar: SYSCONF.ALL
	},
	getters,
	mutations,
	actions
})