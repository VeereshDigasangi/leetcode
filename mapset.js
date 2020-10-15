// let map = new Map();

// map.set('1', 'str1'); // a string key
// map.set(1, 'num1'); // a numeric key
// map.set(true, 'bool1'); // a boolean key
// map.set(1, "hee")
// // console.log(map.get(1));
// // map['1']='KK'
// // console.log(map.get('1'));
// console.log(map.entries());
// for (let entry of map) { // the same as of recipeMap.entries()
//     console.log(entry); // cucumber,500 (and so on)
// }

let set = new Set();

let john = {
    name: "John"
};
let pete = {
    name: "John"
};
let mary = {
    name: "John"
};

let s = Object.assign({}, john);
// visits, some users come multiple times
set.add(john);
set.add(john);
set.add(pete);
set.add(pete);
set.add(mary);
set.add(mary);
set.add(s);
set.add("dd")
set.add("dd")
set.add("ww")
// console.log(set.entries());

// console.log(set.size);

let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

// Error: keys.push 
keys.push("mored");
// console.log(keys);

var pilots = [{
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];


var totalYears = pilots.reduce(function (accumulator, pilot) {
    console.log(accumulator);
    return accumulator + pilot.years;
    // console.log();
    
}, 0);
console.log(totalYears);
