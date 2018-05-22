<template>
    <section class="main" v-show="statusList.length">
        <input id="toggle-all" class="toggle-all" type="checkbox" @change="changeAllState(!checkboxStatus)"
            :checked="checkboxStatus">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <view-task v-for="(item,idx) in statusList" :item="item" :key="item.id" />
        </ul>
    </section>
</template>
<script>
import { createNamespacedHelpers } from '../lib/vuex'
import ViewTask from './task.vue'
import SYSCONF from '../util/config'

const { mapGetters, mapActions } = createNamespacedHelpers('todo')

const computed = {
    ...mapGetters({
        statusList: 'todosByType'
    }),
    checkboxStatus() {
        if (this.statusList.length > 0) {
            return this.statusList.every((item) => {
                return item.type === SYSCONF.STATUS
            })
        }
        return false
    }
}
const methods = mapActions({
    changeAllState: 'modifyAllState'
})

export default {
    created() {
        this.$store.dispatch('todo/restore')
    },
    computed,
    methods,
    components: {
        ViewTask
    }
}
</script>