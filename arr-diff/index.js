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

function diffArray(one, two) {
    if (!Array.isArray(two)) {
        return one.slice();
    }

    var tlen = two.length;
    var olen = one.length;
    var idx = -1;
    var arr = [];

    while (++idx < olen) {
        var ele = one[idx];

        var hasEle = false;
        for (var i = 0; i < tlen; i++) {
            var val = two[i];

            if (ele === val) {
                hasEle = true;
                break;
            }
        }

        if (hasEle === false) {
            arr.push(ele);
        }
    }

    return arr;
}

function arrDiff(arr/*, array*/) {
    var len = arguments.length;
    var idx = 0;
    while (++idx < len) {
        arr = diffArray(arr, arguments[idx]);
    }
    return arr;
}

