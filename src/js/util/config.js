export default {
    // 默认状态
    STATUS: 'active',
    OPPRSTATUS: 'complete',
    ALL: 'all',
    DBNAME: 'todomvc',
    // 标记当前状态是否记录，与send函数共享
    RECORDACTION: true,
    RECORDMUTATION: true,
    // 修改state不记录的列表
    // history的所有commit都不记录
    NOTRECORDMUTATION: ['history/*'],
    // 不记录的ACTION列表
    // 前进、后退按钮 changeAction
    // 数据还原 restore
    NOTRECORDACTIONS: ['history/changeAction',
        'todo/restore',
        'todo/lockActions',
        'todo/modifyAllState',
        'label/reduceLabel'
    ]
}