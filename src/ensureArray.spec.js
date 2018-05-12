/**
 * Test suite for ensureArray module
 */

import expect from 'expect';
import ensureArray from './ensureArray';

describe('ensureArray:', function () {
	it('should return the original array if one passed in', function () {
		expect(ensureArray([1])).toEqual([1]);
	});

	it('should return an array if non array passed in', function () {
		expect(ensureArray(1)).toEqual([1]);
		expect(ensureArray('foo')).toEqual(['foo']);
	});

	it('should still return an array if falsy value passed in', function () {
		expect(ensureArray()).toEqual([undefined]);
		expect(ensureArray(false)).toEqual([false]);
		expect(ensureArray(null)).toEqual([null]);
	});
});