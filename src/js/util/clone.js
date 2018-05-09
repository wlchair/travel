export default function objectClone(cobj) {
	var tmpObj = {};
	for (var typeName in cobj) {
		if (typeof cobj[typeName] === "object") {
			tmpObj[typeName] = objectClone(cobj[typeName])
		} else {
			tmpObj[typeName] = cobj[typeName];
		}
	}
	return tmpObj;
}