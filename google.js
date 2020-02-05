/* Problem:
Given a sequence of numbers, label each value ​ X ​ with the number of immediately preceding
(contiguous) values that are less than ​ X ​ .
Example:
In:  4 10 8  6  7  9  5  11
Out: 0 1  0  0  1  3  0   7 */



function getImmediatePreceedingValues(a) {
    let out = [0];
    for (let i = 1; i < a.length; i++) {
        let count = 0;
        for (let j = i - 1; j > -1; j--) {
            if (a[i] > a[j]) {
                count++;
            } else
                break;
        }
        out.push(count);
    }
    return out;
}

console.log(getImmediatePreceedingValues([4, 10, 8, 6, 7, 9, 5, 11]));
