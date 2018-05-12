/**
 * Test suite for append module
 */

import expect from 'expect';
import append from './append';
import tb from './tagbuildr';

describe('append:', function () {
	it('should append a child Element', function() {
		const el = tb('div');

		append.call(el, tb('div.test'));

		expect(el.querySelector('.test')).toBeDefined();
	});

	it('should append a string of html', function() {
		const el = tb('div');

		append.call(el, `<div class="test">bar</div>`);

		expect(el.querySelector('.test')).toBeDefined();
	});

	it('should append a number', function () {
		const el = tb('div');

		append.call(el, 2);

		expect(el.textContent).toEqual('2');
	});

	it('should append arbitrary text', function () {
		const el = tb('div');

		append.call(el, 'test');

		expect(el.textContent).toEqual('test');
	});
});