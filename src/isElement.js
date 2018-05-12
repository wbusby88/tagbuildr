/*
*  Check if variable is an element
*  @param {mixed} obj any value to test
*  @return {boolean}
*/
let isElement = void 0;
if (window && "HTMLElement" in window) {
	isElement = function isElement(obj) {
		return obj instanceof HTMLElement;
	};
} else {
	isElement = function isElement(obj) {
		return !!(obj && typeof obj === "object" && obj.nodeType === 1 && obj.nodeName);
	};
}

export default isElement;