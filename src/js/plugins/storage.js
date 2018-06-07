import DB from '../util/db'
import CONFIG from '../util/config'
import {
    isMatch
} from '../util/judge'
export default store => {
    // action不是restore
    // mutation是todo的所有操作，都要记录
    let RECORDACTION = true
    let RECORDMUTATION = true
    store.subscribeBeforeAction((action, state) => {
        if (action.type === 'todo/restore') {
            RECORDACTION = false
        }
    })
    store.subscribeAfterAction((action, state) => {
        RECORDACTION = true
    })
    store.subscribeBeforeMutation((mutations, state) => {
        CONFIG.NOTRECORDMUTATION.every((item) => {
            if (isMatch(item, mutations.type)) {
                RECORDMUTATION = false
                return false
            } else {
                return true
            }
        })
    })
    store.subscribeAfterMutation((mutations, state) => {
        // 不管行为如何，
        // 执行的结果要记录
        if (RECORDACTION && RECORDMUTATION) {
            const formatTodos = JSON.stringify(state.todo.todos)
            DB.updateInfo(formatTodos).catch((ret) => {
                throw new Error(ret)
            })
        }
        RECORDMUTATION = true
    })
}