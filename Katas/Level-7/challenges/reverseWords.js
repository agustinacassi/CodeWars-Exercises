//1. Description
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//2. My Solution
function reverseWords(str) {
    let rev = str.split("").reverse().join("")
    let arr = rev.split(" ").reverse()
    return arr.join(" ")
}

//3. Refactor with better coding practices
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
}