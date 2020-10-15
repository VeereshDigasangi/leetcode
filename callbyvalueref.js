//callby values example
//the original values will not affect
//applicable only primitive data type values
let orginal = 3;

function updateOrigin(o) {
    o += 1;
    console.log(o);

}

updateOrigin(orginal)
console.log(orginal);


//pass by reference happens when non-primitive data  type object(obj or arry) passed
let myval = {
    value: 33
}

function updateOriginVal(o) {
    o.value = 44;
}

updateOriginVal(myval)
console.log(myval);