require('mocha');
const assert = require('assert');
const last = require('../array-last');

describe('last', function () {
    it('should show an error if invalide arguments are passd', function () {
        assert.throws(function () {
            last();
        }, /expected/i);

        assert.throws(function () {
            last('foo');
        }, /expected/i);

        assert.throws(function () {
            last({ foo: 'bar'});
        }, /expected/i);
    });

    it('should return the last element in the array:', function () {
        assert.strictEqual(last(['a', 'b', 'c', 'd', 'e', 'f']), 'f');
        assert.strictEqual(last(['a', 'b', 'c', 'd', 'e', 'f'], 1), 'f');
    });

    it('should the last n elements of the array:', function () {
        assert.deepEqual(last(['a', 'b', 'c', 'd', 'e', 'f'], 3), ['d', 'e', 'f']);
    });

    it('should return null if the array has no elements', function () {
        assert.strictEqual(last([]), null);
        assert.strictEqual(last([], 3), null);
    });

});