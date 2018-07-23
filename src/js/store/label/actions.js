import send from '../../util/send'
export const actions = {
    reduceLabel({
        commit
    }, label) {
        return send({}, function() {
            commit('del', label)
        })
    },
    plusLabel({
        commit
    }, label) {
        return send({}, function() {
            commit('add', label)
        })
    }
}