export default {
    // completed, active
    STATUS: 'active',
    OPPRSTATUS: 'complete',
    ALL: 'all',
    DBNAME: 'todomvc',
    // 是否action的行为到history对象里
    RECORDACTION: true,
    RECORDMUTATION: true,
    // history的所有commit都不记录
    NOTRECORDMUTATION: ['history/*'],
    // 前进、后退按钮 changeAction
    // 数据还原 restore
    NOTRECORDACTIONS: ['history/changeAction', 'todo/restore', 'todo/lockActions']
}