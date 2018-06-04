import SYSCONF from '../util/config'
const storage = window.localStorage

export default {
	updateInfo(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				storage.setItem(SYSCONF.DBNAME, data)
				resolve()
			}, 500)
		})
	},
	/**
	 * [fetchAllInfo description]
	 * @return {[Array]} [返回的类型必须是数组]
	 */
	fetchAllInfo() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let ret = JSON.parse(storage.getItem(SYSCONF.DBNAME))
				const typeOfRet = toString.apply(ret)
				ret = typeOfRet === "[object Null]" ? [] : ret
				if (typeOfRet) {
					resolve(ret)
				} else {
					reject(ret)
				}
			}, 5000)
		})
	}
}