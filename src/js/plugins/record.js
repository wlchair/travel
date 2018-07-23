import CONFIG from '../util/config'
import Clone from '../util/clone'
import {
    isMatch
} from '../util/judge'
let historyItem = []
let recordItem

// guid 是索引值，指向应该操作哪个historyItem的对象
let guid = -1
export const recordActionBefore = function(action, state) {
    console.log(1)
    CONFIG.NOTRECORDACTIONS.every((item) => {
        if (action.type === item) {
            CONFIG.RECORDACTION = false
            return false
        } else {
            return true
        }
    })

    // restore, undo请求都不进行监听
    // 除此之外，任何动作来源是undo，redo也不进行监听

    if (!CONFIG.RECORDACTION) {
        return
    }
    // 确认指针是否在history的末尾
    if (!this.getters['history/isLastPoint']) {
        // 如果不是在末尾，删除指针后面的记录
        this.commit('history/updateActs')
    }
    recordItem = {
        // 用于当前执行的动作
        cmd: {
            // 动作名称
            actionType: action.type,
            // 动作参数
            texts: action.payload
        },
        // 记录之前的对象，用于undo时候的参数
        before: null
    }
    guid++
    historyItem.push(recordItem)
}
export const recordActionAfter = function(action, state) {
    console.log(4)
    if (CONFIG.RECORDACTION &&
        action.type === recordItem.cmd.actionType) {
        this.commit('history/create', historyItem)
        historyItem = []
    }
    // 只有不记录列表中的action
    // 才能修改是否记录的行为状态
    CONFIG.NOTRECORDACTIONS.every((item) => {
        if (action.type === item) {
            CONFIG.RECORDACTION = true
            return false
        } else {
            return true
        }
    })
}
export const recordMutationBefore = function(mutations, state) {
    CONFIG.NOTRECORDMUTATION.every((item) => {
        if (isMatch(item, mutations.type)) {
            CONFIG.RECORDMUTATION = false
            return false
        } else {
            return true
        }
    })

    // 记录行为 并且 记录commit才执行
    if (CONFIG.RECORDACTION && CONFIG.RECORDMUTATION) {
        historyItem[guid].before = Clone(mutations.payload)
        guid--
    }
}
export const recordMutationAfter = function(mutations, state) {
    CONFIG.NOTRECORDMUTATION.every((item) => {
        if (isMatch(item, mutations.type)) {
            CONFIG.RECORDMUTATION = true
            return false
        } else {
            return true
        }
    })
}