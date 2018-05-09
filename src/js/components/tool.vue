<template>
    <nav class="nav">
        <button class="redo" @click="redoOperation('REDO')"> redo </button>
        <button class="undo" @click="undoOperation('UNDO')"> undo </button>
        <button class="readOnly"> readOnly </button>
    </nav>
</template>
<script>
import { mapActions } from '../lib/vuex'
const methods = {
	...mapActions('history',{
		undoOperation: 'changeAction',
		redoOperation: 'changeAction'
	})
}
export default {
    methods
}
</script>