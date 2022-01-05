var romanToInt = function(s) {
  // define a variable to track value
  var result = 0;
  // define an object housing the values of each roman numeral
  var romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  // iterate through the string
  for (var i = 0; i < s.length; i ++) {
    // if current character is I, X, or C
      // check the following character for V, L, or D respectively
    if (
      (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) || 
      (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) || 
      (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M'))
      ) {
      result -= romanValues[s[i]]
    } else {
      // get value of current character and add to result
      result += romanValues[s[i]]
    }
  }
  // return result
  return result;
};