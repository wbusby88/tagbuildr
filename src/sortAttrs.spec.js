/**
 * Test suite for sortAttrs module
 */

import expect from 'expect';
import sortAttrs from './sortAttrs';

describe('sortAttrs:', function () {
	it('should create a key value pair object of attributes and their values', function () {
		expect(sortAttrs(['src=my-img.jpg', 'data-foo=bar']))
			.toEqual({
				src: 'my-img.jpg',
				'data-foo': 'bar'
			});
	});

	it('should create a long className string when multiple className attribute strings are passed in', function () {
		expect(sortAttrs(['className=foo', 'className=bar']))
			.toEqual({
				className: 'foo bar'
			});
	});
});
