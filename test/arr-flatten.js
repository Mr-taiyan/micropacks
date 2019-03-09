require('mocha');
const assert = require('assert');
const flatten = require('../arr-flatten');

describe('flatten', function () {
    it('should flatten nested arrays:', function () {
        assert.deepEqual(flatten(['a', 'b', ['c'], 'd', ['e']]), ['a', 'b', 'c', 'd', 'e']);
    });

    it('should flatten deeply nested arrays', function () {
        assert.deepEqual(flatten(['a', [[[[[[[['b', [['c']]]]]], 'd', ['e']]]]]]), ['a', 'b', 'c', 'd', 'e']);
        assert.deepEqual(flatten(['a', 'b', ['c'], 'd', ['e']]), ['a', 'b', 'c', 'd', 'e']);
        assert.deepEqual(flatten([['a', ['b', ['k', ['a', ['b', ['c'], [['a', [['a', ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]], ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]]], ['a', ['x', ['c'], ['a', ['x', ['k']], [['a', ['b', ['k', ['a', ['b', ['c']], ['a', ['x', ['c'], ['a', ['x', ['k']]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]]], ['d', ['z']]]], ['d', ['m']]], ['d', ['e']]]]], ['d', ['e']]]), [ 'a', 'b', 'k', 'a', 'b', 'c', 'a', 'a', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'a', 'x', 'c', 'a', 'x', 'k', 'a', 'b', 'k', 'a', 'b', 'c', 'a', 'x', 'c', 'a', 'x', 'k', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e', 'd', 'z', 'd', 'm', 'd', 'e', 'd', 'e' ]);
    });
});
