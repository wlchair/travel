import CONFIG from './config'
// 这需要自己实现一个promise对象，
// 在前进，回退，恢复操作情况下，不真正的发送请求
// 所以要根据配置文件的情况，做不同的机制
export default function send(cfg, fn) {
	if (CONFIG.RECORDACTION) {
		return new Promise(function(resolve, reject) {
			// 这里省略了发送ajax的过程
			resolve();
		}).then(function() {
			fn.call(fn);
		})
	} else {
		fn.call(fn)
	}
}