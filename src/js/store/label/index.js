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
        /**
         * {
         *   name: 'task',
         *   color: '#404040'
         * }
         */
        labels: [{
            id: 100,
            name: 'task',
            color: '#7057ff'
        }, {
            id: 101,
            name: 'bugs',
            color: '#d73a4a'
        }, {
            id: 102,
            name: 'question',
            color: '#0e8a16'
        }, {
            id: 103,
            name: 'wontfix',
            color: '#0052cc'
        }, {
            id: 104,
            name: 'help wanted',
            color: '#008672'
        }]
    },
    getters,
    mutations,
    actions
}