import Vue from 'vue'
import store from './store'
import Panel from './components/panel.vue'
import router from './route'
import './directors/focus'
new Vue({
	store,
	router,
	render: h => h(Panel)
}).$mount('.todoapp');