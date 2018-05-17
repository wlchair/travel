import Vue from 'vue'
Vue.directive('focus', {
	update: function(el, {
		value,
		oldValue
	}) {
		if (value && value !== oldValue) {
			el.focus();
		}
	}
})