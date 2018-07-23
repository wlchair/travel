import MRT from '../../util/MRT'
export const actions = {
    changeAction({
        commit,
        getters,
        dispatch
    }, type) {
        // 必须放到commit前面，因为功能里面涉及到了指针的信息
        let items = getters.itemsByType(type)
        if (!items) {
            return
        }
        commit('updatePoint', type)

        // 三类：
        // 1. 通过反向动作还原 action： 插入todo
        // 2. 通过反向属性还原 prop： toggle（单个）
        // 3. 通过覆盖属性还原： 修改数据
        // 有反向行为的action

        for (let i = 0, len = items.length; i < len; i++) {
            let item = items[i]
            let oppr = MRT[item.cmd.actionType]
            let executeUndo = function(actionArgs) {
                // 有反向，并属于反向动作的UNDO操作 (第一种)
                if (oppr && oppr.type === 'action') {
                    dispatch(oppr.name, actionArgs, {
                        root: true
                    })
                    return
                }
                // 第二种
                if (oppr && oppr.type === 'prop') {
                    // 只要是REDO，就会执行这动作
                    // 如果oppr.type = prop，说明action名字相同
                    // 所以 UNDO也执行这个方法
                    dispatch(item.cmd.actionType, actionArgs, {
                        root: true
                    })
                    return
                }
                // 第三种
                if (!oppr) {
                    // 把之前的数据传入
                    dispatch(item.cmd.actionType, {
                        todo: actionArgs.todo,
                        value: actionArgs.todo.value
                    }, {
                        root: true
                    })
                    return
                }
            }
            if (type === 'UNDO') {
                let past = item.before
                if (Array.isArray(past)) {
                    for (let i = 0, len = past.length; i < len; i++) {
                        executeUndo(past[i])
                    }
                } else {
                    executeUndo(past)
                }
            }
            if (type === 'REDO') {
                // 把记录的现在的数据传入
                dispatch(item.cmd.actionType, item.cmd.texts, {
                    root: true
                })
                return
            }
        }
    }
}