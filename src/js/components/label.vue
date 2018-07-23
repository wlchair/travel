<template>
<li class="label"
    :style="{background: item.color}"
    @click="destoryLabel(item)">
    {{item.name}} - {{item.id}}<span>×</span></li>
</template>
<script>
import {
    mapActions
} from '../lib/vuex'
const methods = {
    ...mapActions('label', {
        destoryLabel: 'reduceLabel'
    })
}
export default {
    props: ['item'],
    methods
}
</script>