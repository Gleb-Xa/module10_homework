let arr = [0, 1, 2, 3, 4, 5, 6, 7, 'sdlfkjsdf', 8, 9, 10, 11, 0, 'sdlkfj'];

let numArr = arr.filter(function(number) {
  return typeof number === "number";
});

let zeroArr = numArr.filter(function(number) {
  return number == 0;
});
console.log ('Нулей ' + zeroArr.length)

let nozeroArr = numArr.filter(function(number) {
  return number !== 0;
});

let evenArr = nozeroArr.filter(function(number) {
  return number % 2 == 0;
});
console.log ('Четных чисел ' + evenArr.length)

let oddArr = nozeroArr.filter(function(number) {
  return number % 2 !== 0;
});
console.log ('Нечетных чисел ' + oddArr.length)