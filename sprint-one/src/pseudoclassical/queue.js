var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._storage = {};
  this._start = 0;
  this._end = 0;

};

Queue.prototype.enqueue = function(value) {
  this._storage[this._end] = value;
  this._end++;
};

Queue.prototype.dequeue = function() {
  var result = this._storage[this._start];
  if (this.size()) {
    delete this._storage[this._start];
    this._start++;
  }
  return result;
};

Queue.prototype.size = function() {
  return this._end - this._start;
};