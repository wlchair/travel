<template>
<section class="main"
         v-show="statusList.length">
  <input id="toggle-all"
         class="toggle-all"
         type="checkbox"
         @change="changeAllState(!checkboxStatus)"
         :checked="checkboxStatus">
  <label for="toggle-all">Mark all as complete</label>
  <ul class="todo-list">
    <view-task v-for="(item, idx) in statusList"
               :item="item"
               :key="item.id" />
  </ul>
  <ul class="label-list">
    <view-label v-for="(item, idx) in labelList"
                :item="item"
                :key="item.id"/>
  </ul>
</section>
</template>
<script>
import ViewTask from './task.vue'
import ViewLabel from './label.vue'
import SYSCONF from '../util/config'
import {
    mapGetters,
    mapActions
} from '../lib/vuex'

const computed = {
    ...mapGetters({
        statusList: 'todo/todosByType',
        labelList: 'label/labels'
    }),
    checkboxStatus() {
        if (this.statusList.length > 0) {
            return this.statusList.every((item) => {
                return item.type === SYSCONF.OPPRSTATUS
            })
        }
        return false
    }
}
const methods = mapActions({
    changeAllState: 'todo/modifyAllState'
})

export default {
    computed,
    methods,
    components: {
        ViewTask,
        ViewLabel
    }
}
</script>