/*
Question B -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/
function sortByStrings(s,t) {
  var newStr = "";
  for(var i=0; i<t.length; i++) {
    for(var j=0; j<s.length; j++) {
      if(t.charAt(i) === s.charAt(j)) {
        newStr += t.charAt(i);
      }
    }
  }
  return newStr;
}
