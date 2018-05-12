/*
*  Check if variable is an array
*  @param {mixed} obj any value to test
*  @return {boolean}
*/
let isArray = void 0;
if (Array.isArray) {
	isArray = Array.isArray;
} else {
	isArray = function(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	};
}

export default isArray;