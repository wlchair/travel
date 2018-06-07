<template>
<li class="todo"
    :class="{editing: isEditing, completed: isChecked }">
  <div class="view">
    <input type="checkbox"
           :checked="isChecked"
           class="toggle"
           @click="changeState(item)">
    <label @dblclick="tabToEdit">{{item.value}}</label>
    <button class="destroy"
            @click="destoryTodo(item)"></button>
  </div>
  <input class="edit"
         v-focus="isEditing"
         :value="item.value"
         @blur="doneTodo" />
</li>
</template>
<script>
import {
    mapActions
} from '../lib/vuex'
import SYSCONF from '../util/config'
const computed = {
    isChecked: function() {
        return this.item.type === SYSCONF.STATUS ? false : true
    }
}
const methods = {
    ...mapActions('todo', {
        destoryTodo: 'reduceTodo',
        changeState: 'modifyState'
    }),
    doneTodo(e) {
        const texts = e.target.value.trim()
        const {
            item
        } = this
        if (texts) {
            this.$store.dispatch('todo/modifyTodo', {
                value: texts,
                todo: item
            }).then(() => {
                this.isEditing = false
            })
        } else {
            this.$store.dispatch('todo/reduceTodo', item)
                .then(() => {
                    this.isEditing = false
                })
        }
    },
    tabToEdit() {
        if (!this.$store.state.todo.readOnly) {
            this.isEditing = true
        }
    }
}
export default {
    data() {
        return {
            isEditing: false
        }
    },
    computed,
    props: ['item'],
    methods
}
</script>