require('mocha');
const assert = require('assert');
const isArraySame = require('../is_arraySame');

describe('Array', function () {
    it('should be same', function () {
        assert(isArraySame([1,2,3], [1,2,3]), 'expect to be same');
    });
    it('should be same', function () {
        assert(isArraySame([[1,2], [[3,4,5],[6,7],8],9], [[1,2], [[3,4,5],[6,7],8],9]), 'expect to be same');
    });
});

describe('Array', function () {
    it('should not be same', function () {
        assert(!isArraySame([1,2,3], [2,3,4]), 'expect not to be same');
        assert(!isArraySame([1,2,3], [2,1,3]), 'expect not to be same');
    });
});