// 动作反向映射关系表
export default {
    'todo/newTodo': {
        type: 'action',
        name: 'todo/reduceTodo'
    },
    'todo/reduceTodo': {
        type: 'action',
        name: 'todo/newTodo'
    },
    'todo/reduceTodosByType': {
        type: 'action',
        name: 'todo/newTodo'
    },
    'label/plusLabel': {
        type: 'action',
        name: 'label/reduceLabel'
    },
    'label/reduceLabel': {
        type: 'action',
        name: 'label/plusLabel'
    },
    'todo/modifyState': {
        type: 'prop'
    }
}