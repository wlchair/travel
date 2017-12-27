<template>
	<header class="header">
		<h1>todos</h1>
		<input class="new-todo" placeholder="What needs to be done?" autofocus @keydown.enter="createInfo">
	</header>
</template>
<script>
	
	import SYSCONF from '../util/config'

	export default {
		methods:{
			createInfo(e){
				const texts = e.target.value.trim()
				this.$store.dispatch('newTodo',{
					value: texts,
					type: SYSCONF.STATUS
				}).then(()=>{
					e.target.value = ""
				}).catch((e)=>{
					new Error(e)
				})
			}
		}
	}
</script>