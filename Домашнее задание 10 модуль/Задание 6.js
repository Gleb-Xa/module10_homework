let arr = [5, 5, 1, 5];
let x = true;

for (let i = 1; i < arr.length; i++) {
  if (arr[0] !== arr[i])
    {x = false; break};
};

console.log(x)