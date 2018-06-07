import Vue from 'vue'
import VueRouter from 'vue-router'
import SYSCONF from '../util/config'
import store from '../store'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/:active?',
        props: (route) => {
            const active = route.params.active
            if (active) {
                store.state.todo.bar = active
            } else {
                store.state.todo.bar = SYSCONF.ALL
            }
        }
    }]
})