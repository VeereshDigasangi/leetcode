'use strict';




/*
 * Complete the 'itemsSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY items as parameter.
 */

function itemsSort(items) {
    let obj = {}
    // items=[]
    items = items.sort();
    let i = 1
    items.forEach((element) => {
        if (obj[element]) {
            obj[element] = obj[element] + i;
        } else {
            obj[element] = i;
        }
    });
    return Object.values(obj)
}


itemsSort([3, 1, 2, 2, 4])
//1 3 4 2 2
// { '1': 1, '2': 2, '3': 1, '4': 1 }
// 1:1,2:2,3:2:
/* 
3 0  3: 1
1 1  1 : 1
2 2  2: 2
2 3  4: 1
4 4

*/