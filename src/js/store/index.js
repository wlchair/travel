import Vue from 'vue'
import Vuex from '../lib/vuex'
import todo from './todo'
import history from './history'

import Pstore from '../plugins/storage'
import Inspect from '../plugins/inspect'
import Record from '../plugins/record'
Vue.use(Vuex)
export default new Vuex.Store({
	plugins: [Inspect, Record, Pstore],
	modules: {
		todo,
		history
	}
})