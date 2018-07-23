import {
    dataType
} from './judge'
export default function Clone(cobj) {
    if (typeof cobj !== 'object') {
        return cobj
    }
    let tmp
    if (dataType(cobj) === '[object object]') {
        tmp = {}
        for (let typeName in cobj) {
            if (typeof cobj[typeName] === 'object') {
                tmp[typeName] = Clone(cobj[typeName])
            } else {
                tmp[typeName] = cobj[typeName]
            }
        }
        return tmp
    }
    if (dataType(cobj) === '[object array]') {
        tmp = []
        for (let i = 0, len = cobj.length; i < len; i++) {
            let item = cobj[i]
            if (typeof item === 'object') {
                tmp[i] = Clone(item)
            } else {
                tmp[i] = item
            }
        }
        return tmp
    }
}