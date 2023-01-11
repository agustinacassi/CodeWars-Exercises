//1. Description
//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//2. My Solution
function areYouPlayingBanjo(name) {
    if (name[0] === "R"){
      return name + " plays banjo"
    }else if(name[0] === "r"){
      return name + " plays banjo"
    }else{
      return name + " does not play banjo"
    }
}