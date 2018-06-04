import Vue from 'vue'
import store from './store'
import Panel from './components/panel.vue'
import router from './route'
import './directors/focus'

(async function(){
	console.log('loading')
	await store.dispatch('todo/restore')
	console.log('loading over')
	new Vue({
		store,
		router,
		render: h => h(Panel)
	}).$mount('.todoapp');
}());