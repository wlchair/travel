<template>
    <nav class="nav">
      <button class="redo"
              @click="redoOperation('REDO')"> redo </button>
      <button class="undo"
              @click="undoOperation('UNDO')"> undo </button>
      <button class="readOnly"
              @click="lockOperation()"> readOnly: {{ readStatus }} </button>
    </nav>
</template>
<script>
import {
    mapActions
} from '../lib/vuex'
const methods = {
    ...mapActions('history', {
        undoOperation: 'changeAction',
        redoOperation: 'changeAction'
    }),
    ...mapActions('todo', {
        lockOperation: 'modifyActions'
    })
}
const computed = {
    readStatus() {
        return this.$store.state.todo.readOnly
    }
}
export default {
    computed,
    methods
}
</script>