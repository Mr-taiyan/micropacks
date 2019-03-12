function diff(arr1, arr2) {
    obj1 = {};
    obj2 = {};
    for (let x of arr1) {
        obj1[x] = true;
    }

    for (let x of arr2) {
        if (!obj1[x]) {
            obj2[x] = true;
        }
    }

    return obj2.keys();

}

module.exports = diff;