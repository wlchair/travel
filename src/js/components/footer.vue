<template>
	<footer class="footer" v-show="todosLen">
		<span class="todo-count"><strong>{{activeNum}}</strong> {{activeNum | complex}} left</span>
		<!-- Remove this if you don't implement routing -->
		<ul class="filters">
			<li v-for="(key,idx) in filters">
				<router-link 
				:to="'/'+ key"
				:class="{ selected: visiblity === key }">
				{{key | capitalize}}
				</router-link>
			</li>
		</ul>
		<!-- Hidden if no completed items are left ↓ -->
		<button class="clear-completed" @click="clearComplete">Clear completed</button>
	</footer>
</template>
<script>
	import SYSCONF from '../util/config'
	import {capitalize} from '../filters/capitalize'
	import {complex} from '../filters/complex'
	const computed = {
		visiblity(){
			return this.$store.state.bar
		},
		activeNum(){
			return this.$store.state.todos.filter((todo)=>{
				return todo.type === SYSCONF.STATUS
			}).length
		},
		todosLen(){
			return this.$store.state.todos.length
		}
	}
	const methods = {
		clearComplete(){
			this.$store.dispatch('reduceTodosByType',
				SYSCONF.STATUS
			)
		}
	}
	export default {
		data(){
			return {
				filters:[SYSCONF.ALL,SYSCONF.OPPRSTATUS,SYSCONF.STATUS]
			}
		},
		computed,
		methods,
		filters:{
			capitalize,
			complex
		}
	}
</script>