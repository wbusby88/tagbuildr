/**
 * Parse and process the attribute strings into an object of key-value pairs like: attr-name: attr-value
 * @private
 * @param {Array} arr an array of attribute strings e.g src=my-img.jpg
 * @return {Object} a sorted key value pair object ready to add to the element
 */
function sortAttrs(arr) {
	const attrs = {};
	for (let i = 0, l = arr.length; i < l; i++) {
		if (/=/.test(arr[i])) {
			const firstEquals = arr[i].indexOf('=');
			const attr = arr[i].substr(0, firstEquals);
			const value = arr[i].substr(firstEquals + 1);
			let current = attrs[attr];
			if (current) {
				current += " " + value;
			} else {
				current = value;
			}
			attrs[attr] = current;
		}
	}
	return attrs;
}

export default sortAttrs;