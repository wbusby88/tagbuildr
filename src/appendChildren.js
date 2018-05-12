import append from './append';
import ensureArray from './ensureArray';
/**
 * Convenience function to add multiple children nodes to the element
 * @param {Array} children a mixed array of strings|elements|html to add to the element
 * @param {Element} el the dom element
 */
function appendChildren(children, el) {
	ensureArray(children)
		.forEach(append.bind(el));
	return el;
}

export default appendChildren;