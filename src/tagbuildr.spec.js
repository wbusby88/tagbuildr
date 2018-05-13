/**
 * Created by Will Busby on 12/05/2018.
 * Description:
 */


/**
 * Test suite for tagbuildr module
 */

import expect from 'expect';
import tb from './tagbuildr';

describe('tagbuildr:', function () {
	it('should return an Element', function() {
		expect(tb('div') instanceof HTMLElement).toEqual(true);
	});

	it('should add a class to the element', function() {
		const el = tb('div.test');

		expect(el.className).toEqual('test');
	});

	it('should add an id to the element', function() {
		const el = tb('div#test');

		expect(el.id).toEqual('test');
	});

	it('should add multiple classes and an id to the element', function () {
		const el = tb('div.foo#bar.fizz');

		expect(el.className).toContain('fizz');
		expect(el.className).toContain('foo');
		expect(el.id).toEqual('bar');
	});

	it('should add an attribute to the element', function () {
		const el = tb('div|data-test=foo');

		expect(el.getAttribute('data-test')).toEqual('foo');
	});

	it('should add multiple attributes to the element', function () {
		const el = tb('div|data-bar=foo|data-foo=bar');

		expect(el.getAttribute('data-foo')).toEqual('bar');
		expect(el.getAttribute('data-bar')).toEqual('foo');
	});

	it('should add text to the element when text is the second parameter', function () {
		const el = tb('div', 'test');

		expect(el.textContent).toEqual('test');
	});

	it('should add a child element to the element when element is second parameter', function () {
		const el = tb('div', tb('div'));

		expect(el.children.length).toEqual(1);
	});

	it('should add multiple children to the element', function () {
		const el = tb('div', [
			tb('div'),
			tb('div')
		]);

		expect(el.children.length).toEqual(2);
	});

	it('should add a mix of text, numbers, and elements to the element at the same time', function () {
		const el = tb('div', [
			'foo',
			tb('div.test', 'bar'),
			1
		]);

		expect(el.innerHTML).toEqual(
			`foo<div class="test">bar</div>1`
		);
	});
});