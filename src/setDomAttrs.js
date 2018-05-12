/**
 * Add attributes to the dom element
 * @private
 * @param {Object} attrs object of key-value pairs of dom attributes. Classes and Id are added directly to element and others are set via setAttribute
 * @param {Element} el the dom element
 */
function setDomAttrs(attrs, el) {
	for (let attr in attrs) {
		if (!attrs.hasOwnProperty(attr)) { continue; }
		switch (attr) {
			case 'className':
			case 'id':
				el[attr] = attrs[attr];
				break;
			default:
				el.setAttribute(attr, attrs[attr]);
				break;
		}
	}

	return el;
}

export default setDomAttrs;