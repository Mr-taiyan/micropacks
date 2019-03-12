function diff(arr1, arr2) {
    const obj1 = {};
    const arr = [];
    for (let x of arr1) {
        obj1[x] = true;
    }
    console.log(obj1);

    for (let x of arr2) {
        if (obj1[x]) {
            obj1[x] = false;
        }
    }

    for (let i in obj1) {
        if (obj1[i]) {
            arr.push(i);
        }
    }

    return arr;

}

module.exports = diff;