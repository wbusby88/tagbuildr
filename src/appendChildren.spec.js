/**
 * Test suite for appendChildren module
 */

import expect from 'expect';
import appendChildren from './appendChildren';
import tb from './tagbuildr';

describe('appendChildren:', function () {
	it('should add one child', function() {
		const el = tb('div');

		appendChildren(tb('div'), el);

		expect(el.children.length).toEqual(1);
	});

	it('should add multiple children', function () {
		const el = tb('div');
		appendChildren([tb('div.foo'), tb('div.bar')], el);

		expect(el.children[0].className).toEqual('foo');
		expect(el.children[1].className).toEqual('bar');
		expect(el.children.length).toEqual(2);
	});
});