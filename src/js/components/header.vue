<template>
<header class="header">
  <h1>todos</h1>
  <input class="new-todo"
         placeholder="What needs to be done?"
         autofocus
         @keydown.enter="createInfo">
</header>
</template>
<script>
import SYSCONF from '../util/config'
import {
    isPromise
} from '../util/judge'
export default {
    methods: {
        createInfo(e) {
            const texts = e.target.value.trim()
            if (texts) {
                let ret = this.$store.dispatch('todo/newTodo', {
                    value: texts,
                    type: SYSCONF.STATUS,
                    labelId: parseInt(Math.random() * 6, 10) + 100
                })
                if (isPromise(ret)) {
                    ret.then(() => {
                        e.target.value = ''
                    })
                }
            }
        }
    }
}
</script>