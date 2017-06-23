/*
Question 3 -- getClosingParen(sentence, openingParenIndex): "Sometimes (when I nest them (my parenthesis) too much (like this (and this))) they get confusing." Write a function, that given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis. Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).
*/
function getClosingParen(sentence, openingParenIndex) {
  var closingParenIndex = openingParenIndex;
  var count = 1;
  while(count > 0) {
    if(closingParenIndex > sentence.length) {
      return "Closing parenthesis missing";
    }
    closingParenIndex++
    var ch = sentence[closingParenIndex];
    if(ch === '(') {
      count++;
    }
    else if(ch === ')') {
      count--;
    }
  }
  return closingParenIndex;
}
