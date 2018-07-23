import DB from '../../util/db'
import send from '../../util/send'
import CONFIG from '../../util/config'
import BuildID from '../../util/id'
export const actions = {
    newTodo({
        commit
    }, data) {
        return send({}, function() {
            if (!data.id) {
                data.id = BuildID()
            }
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
        commit,
        state
    }, originType) {
        return send({}, function() {
            const tmpArray = state.todos.filter((todo) => {
                return todo.type === originType
            })
            commit('delByType', tmpArray)
        })
    },
    reduceTodosByLabelId({
        commit
    }, labelId) {
        return send({}, function() {
            commit('delByLabelId', labelId)
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