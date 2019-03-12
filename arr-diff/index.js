function diff(arr1, arr2) {
    const obj1 = {};
    const obj2 = {};
    for (let x of arr1) {
        obj1[x] = true;
    }

    for (let x of arr2) {
        if (!obj1[x]) {
            obj2[x] = true;
        }
    }

    return Object.keys(obj2);

}

module.exports = diff;