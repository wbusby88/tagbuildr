/**
 * Test suite for handleClassesAndId module
 */

import expect from 'expect';
import handleClassesAndId from './handleClassesAndId';

describe('handleClassesAndId:', function () {
	it('should return the string if first character is pipe', function () {
		expect(handleClassesAndId('|fizz=bar')).toEqual('|fizz=bar');
	});

	it('should turn class full stop to a className attribute string', function () {
		expect(handleClassesAndId('.foo')).toEqual('|className=foo');
	});

	it('should convert a hash to an id attribute string', function () {
		expect(handleClassesAndId('#bar')).toEqual('|id=bar');
	});

	it('should convert multiple classes and ids to an attribute string', function () {
		expect(handleClassesAndId('.foo#bar.fizz')).toEqual('|className=fizz|id=bar|className=foo');
	});

	it('should leave current attribute strings alone', function () {
		expect(handleClassesAndId('.foo|data-foo=bar')).toEqual('|className=foo|data-foo=bar');
	});
});