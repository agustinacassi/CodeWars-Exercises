//1. Description
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

//2. My Solution
function oddOrEven(array) {
    let count = 0;
    let state = "";
    for(let i = 0; i < array.length; i++){
      count += array[i]
    }
    if(count%2 === 0){
      state = "even"
    }else{
      state = "odd"
    }
    return state;
}