import DB from '../../util/db'
import send from '../../util/send'
import CONFIG from '../../util/config'
export const actions = {
    newTodo({
        commit
    }, data) {
        return send({}, function() {
            commit('create', data)
        })
    },
    reduceTodo({
        commit
    }, todo) {
        return send({}, function() {
            commit('del', todo)
        })
    },
    reduceTodosByType({
        commit
    }, originType) {
        return send({}, function() {
            commit('delByType', originType)
        })
    },
    modifyTodo({
        commit
    }, payload) {
        return send({}, function() {
            commit('update', payload)
        })
    },
    modifyState({
        commit
    }, todo) {
        return send({}, function() {
            commit('toggle', todo)
        })
    },
    modifyAllState({
        commit
    }, originState) {
        return send({}, function() {
            commit('toggleAll', originState)
        })
    },
    modifyActions({
        commit
    }) {
        return send({}, function() {
            commit('toggleRead')
        })
    },
    async restore({
        commit
    }) {
        await DB.fetchAllInfo().then((ret) => {
            CONFIG.RECORDMUTATION = false
            ret.forEach((item) => {
                commit('create', item)
            })
            CONFIG.RECORDMUTATION = true
        }).catch((ret) => {
            throw new Error(ret)
        })
    }
}