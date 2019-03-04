module.exports = function (num) {
    if (typeof num === 'number') {
        return num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(num);
    }
    return false;
};

function isNumber(n) {
    let type = typeof (n);
    if (type !== 'number' && type !== 'string') {
        return false;
    }

    return (+n - +n + 1) >=0 && n !== '';
}
