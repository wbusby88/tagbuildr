import isElement from './isElement';

/**
 * Main append child function
 * @param {string|Element} child a string|Element|html - insertAdjacentHTML is used for strings and html strings as it is much faster when appending multiple children. See test case here: https://jsperf.com/innerhtml-vs-insertadjacenthtml-multiple-children
 * @this {Element} el
 *
 */
function append(child) {
	if (isElement(child)) {
		this.appendChild(child);
	} else {
		this.insertAdjacentHTML('beforeend', child);
	}

	return this;
}

export default append;