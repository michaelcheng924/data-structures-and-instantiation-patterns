var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.Size = 0;

  Queue.prototype.constructor = Queue;

};

Queue.prototype = {
  enqueue: function(value) {
    this.storage[this.Size] = value;
    this.Size++;
  },

  dequeue: function(){
    this.Size && this.Size--;
    var result = this.storage[0];
    this.storage[0] = this.storage[1]
    return result;
  },
  size: function() {
    return this.Size;
  }
};




