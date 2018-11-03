const Stack = (() => {
  const items = new Array();

  class Stack {
    get _stack() {
      return items;
    }

    push(element) {
      this._stack.push(element);
    }

    pop() {
      return this._stack.pop();
    }

    peek() {
      return this._stack[this._stack.length - 1];
    }

    clear() {
      items.length = 0;
    }

    size() {
      return items.length;
    }
  }

  return Stack;
})();

/* Multiple Environments Support */

// AMD
if (typeof define === "function" && define.amd) {
  define(function() {
    return Stack;
  });

  // NodeJS/CommonJS
} else if (typeof exports === "object") {
  if (typeof module === "object" && typeof module.exports === "object") {
    exports = module.exports = Stack;
  }

  // Browser
} else {
  window.Stack = Stack;
}
