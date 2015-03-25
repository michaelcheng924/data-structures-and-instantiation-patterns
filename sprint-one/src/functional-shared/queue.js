var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = {};

  queue.storage = {};
  queue.Size = 0;

  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.Size] = value;
    this.Size++;
  },
  dequeue: function() {
    this.Size && this.Size--;
    var result = this.storage[0];
    this.storage[0] = this.storage[1];
    return result;
  },
  size: function() {
    return this.Size;
  }
};



