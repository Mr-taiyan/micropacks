function judge(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
        return false;
    }

    for (let [k, v] of arr1.entries()) {

        if (Array.isArray(v)) {
            if (!judge(v, arr2[k])) {
                return false;
            }
        } else if (v !== arr2[k]) {
            return false;
        }
    }

    return true;
}

module.exports = judge;