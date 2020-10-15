let get1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("400")
  }, 400);

  setTimeout(() => {
    resolve("800")
  }, 800);
})

let get2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("get2 400")
  }, 400);

  setTimeout(() => {
    resolve("get2 800")
  }, 800);
})

Promise.all([get1, get2]).then(function (d) {
  console.log(d);
}).catch(function (e) {
  console.log(e);
})