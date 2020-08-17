// 0/0 is NaN
// 1 + NaN
// 1 / 0
// infinity

// ...............
// Variables

let name = "Can";
let lastName = "Guler";

let fullName = name + " " + lastName;

document.getElementById("container").innerText = fullName;

// ...............

var x = 2;

{
  var x = 5;
  console.log(x);
}
console.log(x);

// output 5 x2;

// ...............

let y = 3;

{
  let y = 8;
  console.log(y);
}
console.log(y);
// output first 8 in a scope; then 3 out of scope..

const z = 5;
{
  const z = 11;
  console.log(z);
}
console.log(z);
