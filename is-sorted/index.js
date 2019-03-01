function defaultComparator(num1, num2) {
    return num1 - num2;
}

module.exports = function checksort(array, comparator) {
    if (!Array.isArray(array)) {
        throw new TypeError('Unexpected Type :' + (typeof array));
    }

    comparator = comparator || defaultComparator;

    for (let i = 0, length = array.length; i < length - 1; i++) {
        if (comparator(array[i], array[i + 1]) > 0) {
            return false;
        }
    }
}