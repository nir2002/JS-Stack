const Stack = require("./Stack");

const stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(100);

console.log(stack.items); // prints undefined -> cannot be accessed directly

console.log(stack.size()); // prints 3

console.log(stack.peek()); // prints 100

console.log(stack.pop()); // prints 100

console.log(stack.pop()); // prints 5

console.log(stack.size()); // prints 1

stack.clear();

console.log(stack.size()); // prints 0
