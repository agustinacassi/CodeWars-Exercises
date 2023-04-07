//1. Description
//Sum of two lowest positive integers

//2. My solution
function sumTwoSmallestNumbers(numbers) {  
    let sort = numbers.sort(function(a,b){return a-b});
    return sort[0] + sort[1];
}