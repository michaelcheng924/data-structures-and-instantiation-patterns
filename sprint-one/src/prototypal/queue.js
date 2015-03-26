var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue._storage = {};
  queue._start = 0;
  queue._end = 0;

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this._storage[this._end] = value;
    this._end++;
  },
  dequeue: function()  { 
  var result = this._storage[this._start];
  if (this.size()){
    delete this._storage[this._start];
    this._start++;
  }
  return result;
  },
  size: function() {
    return this._end - this._start;
  }
};


