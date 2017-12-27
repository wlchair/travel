<template>
	<section class="todoapp">
		<view-header/>
		<view-main/>
		<view-footer/>
		<router-view></router-view>
	</section>
</template>
<style src="todomvc-app-css/index.css"></style>
<script>
	import viewHeader from './header.vue'
	import viewMain from './main.vue'
	import viewFooter from './footer.vue'

	export default {
		components:{
			viewHeader,
			viewMain,
			viewFooter
		}
	}
</script>