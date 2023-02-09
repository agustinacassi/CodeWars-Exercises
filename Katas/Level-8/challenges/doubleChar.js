//1. Description 
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//2. My Solution
function doubleChar(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++){
    newStr += str[i] + str[i]
    }
    return newStr;
}

//3. Refactor with better coding practices
function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}