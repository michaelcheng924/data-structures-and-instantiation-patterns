var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._count = 0;
  
};

Stack.prototype.push = function(value) {
  this._count++;
  this._storage[this._count] = value;
};

Stack.prototype.pop = function() {
  var result = this._storage[this._count];
  if (this.size()) {
    delete this._storage[this._count];
    this._count--;
  }
  return result;
};

Stack.prototype.size = function() {
  return this._count;
};