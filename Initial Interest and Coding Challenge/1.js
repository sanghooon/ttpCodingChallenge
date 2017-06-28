/*
Question 1 -- sumOfTwo(a,b,v): You have 2 integer arrays: a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.
*/
function sumOfTwo(a, b, v) {
  var arr = [];
  for(var i=0; i<a.length; i++) {
    var x = v - a[i];
    arr[x] = a[i];
  }
  for(var j=0; j<b.length; j++) {
    if(arr[b[j]] !== null) {
      return true;
    }
  }
  return false;
}
