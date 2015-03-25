var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.start = 0;
  queue.end = 0;

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.end] = value;
    this.end++;
  },
  dequeue: function()  { 
  var result = this.storage[this.start];
  if (this.size()){
    delete this.storage[this.start];
    this.start++;
  }
  return result;
  },
  size: function() {
    return this.end - this.start;
  }
};


