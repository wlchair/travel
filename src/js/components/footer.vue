<template>
    <footer class="footer" v-show="todosLen">
        <span class="todo-count"><strong>{{activeNum}}</strong> {{activeNum | complex}} left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li v-for="(key,idx) in filters">
                <router-link :to="'/'+ key" :class="{ selected: visiblity === key }">
                    {{key | capitalize}}
                </router-link>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed" @click="clearComplete">Clear completed</button>
    </footer>
</template>
<script>
import {mapActions} from 'vuex'
import SYSCONF from '../util/config'
import { capitalize } from '../filters/capitalize'
import { complex } from '../filters/complex'
const computed = {
    visiblity() {
        return this.stateTodo.bar
    },
    activeNum() {
        return this.stateTodo.todos.filter((todo) => {
            return todo.type === SYSCONF.STATUS
        }).length
    },
    todosLen() {
        return this.stateTodo.todos.length
    }
}
const methods = {
    ...mapActions({
        clearComplete: 'todo/reduceTodosByType(SYSCONF.STATUS)'
    })
    // clearComplete() {
    // this.$store.dispatch('todo/reduceTodosByType',
    //     SYSCONF.STATUS
    // )
    // }
}
export default {
    data() {
        return {
            filters: [SYSCONF.ALL, SYSCONF.OPPRSTATUS, SYSCONF.STATUS],
            stateTodo: this.$store.state.todo
        }
    },
    computed,
    methods,
    filters: {
        capitalize,
        complex
    }
}
</script>