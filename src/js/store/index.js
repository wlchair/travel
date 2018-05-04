import Vue from 'vue'
import Vuex from 'vuex'
import todo from './todo'
import history from './history'

import Pstore from '../plugins/storage'
import Inspect from '../plugins/inspect'
import History from '../plugins/history'
Vue.use(Vuex)
export default new Vuex.Store({
	plugins: [Pstore, History],
	modules:{
		todo,
		history
	}
})