function minTime(arr, n, m) {

    var t = 0;
    while (true) {
        let items = 0;
        for (let i = 0; i < n; i++)
            items += (t / arr[i]);
        if (items >= m)
            return t;
        t++;
    }
}

var arr = [7, 11, 13, 9];
var n = arr.length;
let m = 17;
console.log(minTime(arr, n, m))


// This code is contributed by vt_m. 