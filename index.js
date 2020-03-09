// Time: 2.557ms
// console.time("time")
function fibonacci(length) {
  var prev = 0;
  var start = 1;
  var arr = [prev, start];
  
  while (arr.length < length) {
    var next = prev + start;
    arr.push(next);
    prev = start;
    start = next;
  }
  return arr;
}

var output = fibonacci(9);
console.log(output);
// console.timeEnd("time");

// Time: 0.813ms
// console.time("time1")
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(8));
// console.timeEnd("time1");