const NOTLOCKACTIONS = ['todo/restore', 'todo/modifyActions']
// before action
export default function(action, state) {
    // 过滤所有请求
    // 如果是restore或者修改只读状态就不记录到历史列表
    if (state.todo.readOnly) {
        // 符合要求的请求，返回false
        // 都不符合，返回true
        let ret
        NOTLOCKACTIONS.every((item) => {
            if (action.type === item) {
                ret = true
                return false
            } else {
                ret = false
                return true
            }
        })
        return ret
    }

}