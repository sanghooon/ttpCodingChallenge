/*
Question A -- countWays(n): A child is climbing up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can jump up the stairs.
*/
function countWays(n) {
  if(n <= 1) {
    return 1;
  }
  if(n === 2) {
    return 2;
  }
  return countWays(n-1) + countWays(n-2) + countWays(n-3);
}
console.log('QuestionA: ' + countWays(5));
