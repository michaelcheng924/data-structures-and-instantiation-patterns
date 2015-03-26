var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};

  stack._storage = {};
  stack._count = 0;

  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push: function(value) {
    this._count++;
    this._storage[this._count] = value;
  },
  pop: function() {
    var result = this._storage[this._count];
    if (this.size()) {
      delete this._storage[this._count];
      this._count--;
    }
    return result;
  },
  size: function() {
    return this._count;
  }
};


