var isNumber = require('../is-number');
var slice = require('../array-slice');

function arrayFirst(arr, num) {
    if (!Array.isArray(arr)) {
        throw new Error(`${typeof arr} is not expected`);
    }

    if (arr.length === 0) {
        return null;
    }

    var first = slice(arr, 0, isNumber(num) ? +num : 1);
    if (+num === 1 || num == null) {
        return first[0];
    }
    return first;
}
