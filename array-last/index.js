var isNumber = require('../is-number');

function last(arr, n) {
    if (!Array.isArray(arr)) {
        throw new Error('expected the first argument to be an array');
    }

    var len = arr.length;
    if (len === 0) {
        return null;
    }

    n = isNumber(n) ? +n : 1;
    if (n === 1) {
        return arr[len - 1];
    }

    var res = new Array(n);
    while (n--) {
        res[n] = arr[--len];
    }

    return res;

}

module.exports = last;
