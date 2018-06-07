import SYSCONF from '../../util/config'
import BuildID from '../../util/id'
export const mutations = {
    create(state, item) {
        item.id = BuildID()
        state.todos.push(item)
    },
    del(state, item) {
        const idx = state.todos.findIndex((todo) => {
            return todo.id === item.id
        })
        if (idx !== -1) {
            state.todos.splice(idx, 1)
        }
    },
    delByType(state, type) {
        const tmpArray = state.todos.filter((todo) => {
            return todo.type !== type
        })
        state.todos = tmpArray
    },
    update(state, payload) {
        const curr = state.todos.find((todo) => {
            return todo.id === payload.todo.id
        })
        if (curr) {
            curr.value = payload.value
        }
    },
    toggleRead(state) {
        state.readOnly = !state.readOnly
    },
    toggle(state, item) {
        const curTodo = state.todos.find((todo) => {
            return todo.id === item.id
        })
        curTodo.type = curTodo.type === SYSCONF.STATUS ?
            SYSCONF.OPPRSTATUS : SYSCONF.STATUS
    },
    /**
     * [toggleAll]
     * @param  {[type]} state       [Object]
     * @param  {[type]} optionState [Boolean]
     * @return {[type]}             [description]
     */
    toggleAll(state, optionState) {
        let option = optionState
        option = option === false ?
            SYSCONF.STATUS : SYSCONF.OPPRSTATUS
        state.todos.forEach((item) => {
            item.type = option
        })
    }
}