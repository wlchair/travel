import Clone from '../../../src/js/util/clone'

describe('Clone > ', function() {
	let initData, ret;
	it('not Array or Object', () => {
		initData = "zhangsan";
		ret = Clone(initData);
		expect(ret).toBe(initData);
	});
	it('Array', () => {
		initData = [{
			name: 'zhangsan',
			age: 18
		}, {
			name: 'lisi',
			age: 20
		}]
		ret = Clone(initData)
		// 返回是对象类型
		// 输入的是数组类型
		// 所以需要比较第一个数
		expect(ret[0]).toEqual(initData[0]);
	});
	it('Object', () => {
		initData = {
			name: 'zhangsan',
			house:{
				size: 180,
				position: 'beijing'
			}
		}
		ret = Clone(initData)
		expect(ret).toEqual(initData);
	});
});