// 生成todo唯一ID
export default function(ID = 0) {
    let localID = typeof ID !== 'number' ? 0 : ID
    return function() {
        return ++localID
    }
}