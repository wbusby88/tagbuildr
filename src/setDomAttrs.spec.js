/**
 * Test suite for setDomAttrs module
 */

import expect from 'expect';
import setDomAttrs from './setDomAttrs';
import tb from './tagbuildr';

describe('setDomAttrs:', function () {
	it('should add className to the element', function () {
		const el = setDomAttrs({
			className: 'foo bar'
		}, tb('div'));

		expect(el.className).toEqual('foo bar');
	});

	it('should add an id to the element', function () {
		const el = setDomAttrs({
			id: 'foo'
		}, tb('div'));

		expect(el.id).toEqual('foo');
	});

	it('should add other attributes to an element', function () {
		const el = setDomAttrs({
			'data-foo': 'bar',
			'data-bar': 'fizz'
		}, tb('div'));

		expect(el.getAttribute('data-foo')).toEqual('bar');
		expect(el.getAttribute('data-bar')).toEqual('fizz');
	});
});