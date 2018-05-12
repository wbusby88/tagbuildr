/**
 * Default export for tagbuilr function
 */

/**** Utils ****/
import handleClassesAndId from './handleClassesAndId';
import sortAttrs from './sortAttrs';
import setDomAttrs from './setDomAttrs';
import appendChildren from './appendChildren';

/**
 * Main tag building factory function
 * You can have multiple nested calls to the create function from within the children arrays
 * @global
 * @param {String} tagString The element tag string. Use a declarative syntax to define the tag and attributes e.g. h1.title|data-attr=foo, div#main-div etc
 * @param {string|Array} children Either a single child element|string|number or A mixed array of strings|numbers|elements to add as children
 * @return {Element} full DOM element
 */
export default function tagbuildr(tagString, children = null) {
	//transform class and id strings to compatible attributes
	tagString = handleClassesAndId(tagString);
	const tagStrArray = tagString.split(/\|/);
	const tag = tagStrArray.shift();
	const attrs = sortAttrs(tagStrArray);
	const el = setDomAttrs(
		attrs,
		document.createElement(tag)
	);

	//return now if no children
	if (!children) {
		return el;
	}

	//Children array can have a mix of strings and javascript DOM elements.
	return appendChildren(children, el);
}

