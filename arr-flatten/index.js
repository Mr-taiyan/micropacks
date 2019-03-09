function flat(arr, res) {
    var i = 0, cur;
    var len = arr.length;
    for (; i < len; i++) {
        cur = arr[i];
        Array.isArray(cur) ? flat(cur, res) : res.push(cur);
    }
    return res;
}

function func(arr) {
    return flat(arr, []);
}

module.exports = func;