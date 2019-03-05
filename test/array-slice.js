require('mocha');
var assert = require('assert');
var slice = require('../array-slice');

describe('array-slice', function () {
    it('should return the specified range', function () {
        var arr = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        assert.deepEqual(slice(arr, 3, 6), ['e', 'f', 'g']);
        assert.deepEqual(slice(arr, 1), ['b', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
        assert.deepEqual(slice(arr, -1), ['j']);
    });

    it('should not mutate the array', function () {
        var arr = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        slice(arr, 3, 6);
        assert.deepEqual(arr, ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });
});