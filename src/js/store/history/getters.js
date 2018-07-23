export const getters = {
    itemsByType(state) {
        return function(type) {
            // 当undo时，获取当前point，就是需要重置的对象
            // 当redo时，需要在当前的point + 1，就是需要的对象
            // point肯定肯定不是在最后一位
            let point = state.point
            let len = state.acts.length
            let ret = false
            switch (type) {
                case 'UNDO':
                    if ((point === -1 && len === 0) &&
                        (point === 0 && len > 0)) {
                        return ret
                    }
                    break
                case 'REDO':
                    if (len - 1 > point) {
                        ret = ++point
                    } else {
                        return ret
                    }
                    break
            }
            return state.acts[point]
        }
    },
    // 判断当前指针是否指向历史的最后一位
    isLastPoint(state) {
        let len = state.acts.length
        let size = state.point + 1
        return len === size
    }
}