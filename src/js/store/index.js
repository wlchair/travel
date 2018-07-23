import Vue from 'vue'
import Vuex from '../lib/vuex'
import todo from './todo'
import label from './label'
import history from './history'

import Pstore from '../plugins/storage'
import Intercept from '../plugins/intercept'
Vue.use(Vuex)
export default new Vuex.Store({
    plugins: [Intercept, Pstore],
    modules: {
        todo,
        label,
        history
    }
})