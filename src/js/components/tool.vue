<template>
    <nav class="nav">
        <button class="redo"> redo </button>
        <button class="undo" @click="undoHistory('UNDO')"> undo </button>
        <button class="readOnly"> readOnly </button>
    </nav>
</template>
<script>
import { mapActions } from 'vuex'
const methods = {
	...mapActions('history',{
		undoHistory: 'undoAct'
	})
}
export default {
    methods
}
</script>