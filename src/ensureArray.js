import isArray from './isArray';

/**
 * returns a guaranteed array
 * @param {*} value
 * @returns {Array}
 */
function ensureArray(value) {
	return isArray(value) ? value : [value];
}

export default ensureArray;