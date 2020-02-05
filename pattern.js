// A B C D E
//  A B C D
//   A B C
//    A B
//     A

function ultapiramid(n) {
  let b = 65
  let mt = ""
  for (var i = n; i > 0; i--) {
    let s = '';
    for (var j = 0; j < i; j++) {
      s = s + String.fromCharCode(b + (j % 26)) + " ";
    }
    console.log(mt + s);
    mt = mt + " "
  }

  mt = ""
  s = ""
  for (var i = 0; i < n; i++) {
    mt = '';
    for (var j = n - 1; j > i; j--) {
      mt = mt + " "
    }
    s = s + String.fromCharCode(b + (j % 26)) + " ";
    if (i != 0)
      console.log(mt + s);
  }
}

ultapiramid(29)



