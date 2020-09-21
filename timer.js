setTimeout(function() {
    console.log("1");
    
},10)

setImmediate(function(){
    console.log("2");
    
})
// setTimeout(function() {
//     console.log("3");
    
// },0)

process.nextTick(function(){
    console.log("4");
    
})
setImmediate(function(){
    console.log("5");
    
})
console.log("outside");
