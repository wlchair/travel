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
    'todo/modifyState': {
        type: 'prop'
    }
}