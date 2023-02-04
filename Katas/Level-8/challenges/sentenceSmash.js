//1. Description
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//2. My Solution
function smash (words) {
   return words.join(" ")
};

//3. Better coding practices
const smash = words => words.join(' ');
