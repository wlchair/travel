// 不同功能之间解耦
let sequenceMap = {
    'label/reduceLabel': {
        before: ['todo/reduceTodosByLabelId']
    }
}
export default function(action, emitPoint) {
    let effectItems
    let actionName = action.type
    if (sequenceMap[actionName] &&
        (effectItems = sequenceMap[actionName][emitPoint]) != null) {
        for (let i = 0, len = effectItems.length; i < len; i++) {
            this.dispatch(effectItems[i], action.payload.id)
        }
    }
}
