const Stack = (() => {
  const elementsKey = {};
  const items = new WeakMap();

  class Stack {
    constructor() {
      items.set(elementsKey, []);
    }

    get _stack() {
      return items.get(elementsKey);
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
      items.set(elementsKey, []);
    }

    size() {
      return items.get(elementsKey).length;
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
