//1. Description
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

//2. My Solution
function fakeBin(str) {
  return str.replace(/\d/g, function(match){
    return parseInt(match) < 5 ? "0" : "1"
  });
}

//3. Refactor with better coding practices
function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}