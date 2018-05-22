// 生成todo唯一ID
export default (function(ID = 0) {
	return function() {
		return ++ID
	}
}())