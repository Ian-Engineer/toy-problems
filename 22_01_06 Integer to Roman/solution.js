// HARD CODE DIGITS
var intToRoman = function(num) {
  const valuetoRoman = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM'
  }
  // define result variable as an empty string
  var result = '';
  // define increment variable as 10
  var increment = 1;

  // do while loop
  do {
    // check last integer in num
    var lastInt = num % 10 * increment
    if (lastInt !== 0) {
      // add roman numerals to front of result string
      result = valuetoRoman[lastInt] + result;
    }
    // divide num by increment
    num = Math.floor(num/10);
    // increase increment by *10
    increment = increment * 10;
    // while num 
  } while (num)
  return result;
};

// SIMPLIFIED HARD CODE DIGITS
var intToRoman = function(num) {
  // define roman numerals with indexes that match their values
  const thousands = ['','M', 'MM', 'MMM'];
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return thousands[Math.floor(num/1000)] + hundreds[Math.floor(num/100) % 10] + tens[Math.floor(num/10) % 10] + ones[Math.floor(num % 10)];
}

// LARGEST VALUES FIRST
var intToRoman = function(num) {
  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];    
  var symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var result = '';
  for (var i = 0; i < values.length && num > 0; i ++) {
    while (values[i] <= num) {
      num -= values[i]
      result += symbols[i];
    }
  }
  return result;
}