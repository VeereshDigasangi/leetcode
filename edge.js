let a = [3, 5, 7, 9, 33, 99, 7, 33, 7, 3, 9, 2,3,7,7];
// [ 7,7,7,7,7,3,3,3,9,9,33,33,2,5,99 ]
// get key and value in count
function sortArray(data) {
    let res = {};
    for (var i = 0; i < data.length; i++) {
        if (res[data[i]]) {
            res[data[i]] = res[data[i]] + 1;
        } else {
            res[data[i]] = 1;
        }
    }
    return res;
}


function maxDuplicateFirst(s) {
    let output = [];
    while (Object.keys(s).length) {
        // call recrusive function to find max
        let highest = findMax(s)
        delete s[highest.key];
        for (var i = 0; i < highest.val; i++) {
            output.push(highest.key)
        }
    }
    return output;
}
//Find maximum value in the object
function findMax(obj) {
    let highest = {}
    let high = 0
    for (var key in obj) {
        if (Number(obj[key]) > high) {
            highest.key = key;
            highest.val = obj[key]
            high = Number(obj[key])
        }
    }
    return highest;
}

let s = sortArray(a)
console.log(maxDuplicateFirst(s))