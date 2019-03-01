function defaultComparator(num1, num2) {
    return num1 - num2;
}

module.exports = function checksort(array, comparator) {
    if (!Array.isArray(array)) {
        throw new TypeError('Unexpected Type :' + (typeof array));
    }

    comparator = comparator || defaultComparator;

    for (let i = 1, length = array.length; i < length; i++) {
        if (comparator(array[i - 1], array[i]) > 0) {
            return false;
        }
    }
}