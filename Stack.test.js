const Stack = require("./Stack");

const stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.items); // prints undefined -> cannot be accessed directly

console.log(stack.size()); // prints 2

console.log(stack.peek()); // prints 20

console.log(stack.pop()); // prints 20

console.log(stack.size()); // prints 1

stack.clear();

console.log(stack.size()); // prints 0
