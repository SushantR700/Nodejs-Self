const math = require("./module");

console.log(math.add(2,3));
console.log(math.sub(8,1));

// Here the function definition is inside module.js
// to acess the function we need to export the function 
// using module.exports and for accessing the function
// we need to import the module and then we can perform operation
// accross different file/module.