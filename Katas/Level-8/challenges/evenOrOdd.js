//1. Description
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//2. My Solution
function evenOrOdd(number) {
    if(number%2 == 0){
      return "Even"
    }else{
      return "Odd"
    }
}

//3. Refactor with better coding practices
function evenOrOdd(number) {
    return number%2 == 0 ? "Even" : "Odd";
}