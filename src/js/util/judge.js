export function isPromise(val) {
	return val && typeof val.then === 'function'
}
export function isFunction(val) {
	return typeof val === "function"
}
/**
 * @param  {[String]} 参照列表
 * @param  {[String]} 当前对象
 * @return {Boolean}
 */
export function isMatch(ref, instance) {
	let refItems = ref.split('/'),
		instanceItems = instance.split('/'),
		refLen = refItems.length,
		instanceLen = instanceItems.length;
	for (let i = 0; i < refLen, i < instanceLen; i++) {
		let refItem = refItems[i],
			instanceItem = instanceItems[i];
		if (refItem !== instanceItem &&
			refItem !== "*" &&
			instanceItem !== "*")
			return false
	}
	return true
}