function isOpeningBracket(currChar)
{
    if (currChar == '{' || currChar == '[' || currChar == '(')
        return true;
    return false;
}



function matches(openingBracket, closingBracket)
{
    if (openingBracket == '{' && closingBracket != '}')
        return false;
    else if (openingBracket == '[' && closingBracket != ']')
        return false;
    else if (openingBracket == '(' && closingBracket != ')')
        return false;
    return true;
}

function isValid(a) 
{
    
  var mystack = new Array();
  var mylength = a.length;
  for (var i = 0; i < mylength; i++) {
      if (isOpeningBracket(a[i])) {
          mystack.push(a[i]);
      } else if (mystack.length == 0) {
              return false;
      } else {
          var topChar = mystack.pop();
          if (!matches(topChar, a[i])) {
              return false;
          }
      }
      
  }

  if (mystack.length)
        return false;

  return true;    
}
let s = "(){}[](){}()()"
console.log(isValid(s))
