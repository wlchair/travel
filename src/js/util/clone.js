export default function objectClone(cobj) {
    if (typeof cobj !== 'object') {
        return cobj
    }
    let tmpObj = {}
    for (let typeName in cobj) {
        if (typeof cobj[typeName] === 'object') {
            tmpObj[typeName] = objectClone(cobj[typeName])
        } else {
            tmpObj[typeName] = cobj[typeName]
        }
    }
    return tmpObj
}