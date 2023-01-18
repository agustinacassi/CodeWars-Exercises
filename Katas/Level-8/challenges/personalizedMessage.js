//1. Description
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// name equals owner -> 'Hello boss'
// otherwise ->	'Hello guest'

//2. My Solution
function greet (name, owner) {
    if(name === owner){
      return "Hello boss"
    }else{
      return "Hello guest"
    }
}

//3. Refactor with better practices
//Option A
function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
}
//Option B
function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
  }
