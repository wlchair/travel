// 生成todo唯一ID
export default (function(ID = 0) {
    if (typeof ID !== 'number') {
        return
    }
    let localID = ID
    return function() {
        return ++localID
    }
})()