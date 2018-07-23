export const mutations = {
    add(state, item) {
        state.labels.push(item)
    },
    del(state, item) {
        const idx = state.labels.findIndex((label) => {
            return label.id === item.id
        })
        if (idx !== -1) {
            state.labels.splice(idx, 1)
        }
    }
}