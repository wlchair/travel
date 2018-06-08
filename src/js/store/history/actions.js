import MRT from '../../util/MRT'
export const actions = {
    changeAction({
        commit,
        getters,
        dispatch
    }, type) {
        // 必须放到commit前面，因为功能里面涉及到了指针的信息
        let item = getters.itemByType(type)
        if (!item) {
            return
        }
        commit('updatePoint', type)

        // 三类：
        // 1. 通过反向动作还原 action： 插入todo
        // 2. 通过反向属性还原 prop： toggle
        // 3. 通过覆盖属性还原： 修改数据

        // 有反向行为的action
        let oppr = MRT[item.cmd.actionType]
        // 有反向，并属于反向动作的UNDO操作
        if (oppr && oppr.type === 'action' && type === 'UNDO') {
            dispatch(oppr.name, item.cmd.texts, {
                root: true
            })
            return
        }
        if (oppr &&
            (type === 'REDO' || oppr.type === 'prop' && type ===
                'UNDO')) {
            // 只要是REDO，就会执行这动作
            // 如果oppr.type = prop，说明action名字相同
            // 所以 UNDO也执行这个方法
            dispatch(item.cmd.actionType, item.cmd.texts, {
                root: true
            })
            return
        }
        if (!oppr && type === 'UNDO') {
            // 把之前的数据传入
            dispatch(item.cmd.actionType, {
                todo: item.before.todo,
                value: item.before.todo.value
            }, {
                root: true
            })
            return
        }
        if (!oppr && type === 'REDO') {
            // 把记录的现在的数据传入
            dispatch(item.cmd.actionType, item.cmd.texts, {
                root: true
            })
            return
        }

    }
}