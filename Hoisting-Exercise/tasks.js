// Task One:

let destination = "Ancient Egypt";
console.log(destination);

// Task Two:

destination = "Medieval Europe";
console.log(destination);

// Task Three:

const travelDate = "2024-03-15";
travelDate = 15;
// Trying to change the const variable to something else will result in a TypeError because variables declared with const cannot be reassigned.

// Task Four:

console.log(timeMachineModel);
var timeMachineModel = "T-800";
// Printing a variable before declaring it with var will result in undefined instead of an error. This is because variables declared with var are hoisted to the top of their scope and technically ran first before the other code. So timeMachineModel was declared at the top of the global scope but not assigned a value yet. Resulting in undefined instead of "T-800".