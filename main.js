// # 1

function isUnique(string) {
    let set = new Set();

    for (let i = 0; i < string.length; i++) {
        set.add(string[i]);
    }

    if (string.length === set.size) return true;

    return false;

}


console.log(isUnique('сриРреп'));


// # 2

function unpackArray(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const flat = unpackArray(arr[i]);
            for (let j = 0; j < flat.length; j++) {
                newArray.push(flat[j])
            }
        } else {
            newArray.push(arr[i]);
        }
    }

    return newArray
}


console.log(unpackArray([[[1, 2]], [2]]));

// # 3 

function removeItem(string) {
    let set = new Set();
    let output = '';

    for (let i = 0; i < string.length; i++) {
        set.add(string[i]);

    }

    for (item of set) {
        output += `${item}`
    }

    return output;

}

console.log(removeItem('aaazxczxdsa21czxczxc3123123aassqwea21dqqqqqqsdsc'));


// # 4

function equalString(string) {

    const map = {};
    let maxCount = 0;
    let maxCountStr = string[0];

    for (let i = 0; i < string.length; i++) {
        if (map[string[i]]) {
            map[string[i]]++;
        } else {
            map[string[i]] = 1;
        }
        if (map[string[i]] > maxCount) {
            maxCount = map[string[i]];
            maxCountStr = string[i]
        }
    }

    return maxCountStr;
}

console.log(equalString(['a', 'b', 'c', 'c', 'w']));


// # 5 

function isRotated(source, string) {

    return (source + source).includes(string) && source.length === string.length
}


console.log(isRotated('javaScript', 'Scriptjava'))

// # 6 

function arraySubset(source, subset) {

    let counter = 0;

    if (source.length < subset.length) {
        return false;
    }

    for (let i = 0; i < subset.length; i++) {
        if (!source.includes(subset[i])) {
            return false;
        }
    }

    return true;
}

console.log(arraySubset([1, 1, 1, 2], [1, 3, 3]));
console.log(arraySubset([1, 3, 2], [1, 2, 3]));
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3]));

