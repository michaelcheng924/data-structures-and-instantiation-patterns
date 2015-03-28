var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  // Generates index within array size for the given key
  var i = getIndexBelowMaxForKey(k, this._limit);

  // Sets bucket variable to the index in the total array
  var bucket = this._storage.get(i);

  // If no bucket exists there, make bucket an empty array
  if(!bucket){
    var bucket = [];
    // Set empty bucket array as the value for the index in the total array
    this._storage.set(i,bucket);
  }

  // Initializes keyFound variable to false. 
  // If the key exists in the bucket, this variable will change to true.
  var keyFound = false;

  for(var i=0; i<bucket.lengh; i++) {

    // Set tuple equal to each key/value array within the bucket
    var tuple = bucket[i];

    // Check if the passed in key matches the key stored in the tuple
    if (tuple[0] === k) {
      // If the key is found, replace the old value with the passed in value
      tuple[1] = v;
      // Changes keyFound to true, which ends the function
      keyFound = true;
      // End the function if key is found
      break;
    }
  }

  // If key was not found in the bucket, create a new key/value array in the bucket
  if(!keyFound){
    bucket.push([k, v]);
    this._count++;
    if (this._count >= this._limit * 0.75) {
      this.resize(this._limit * 2);
    }
  }  
};

HashTable.prototype.retrieve = function(k){

  // Generates index within array size for the given key
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  // Sets bucket variable to the index in the total array
  var bucket = this._storage.get(i);

  // If no bucket exists there, return null
  if (!bucket) {
    return null;
  }

  // If a bucket exists, check each key/value array for the passed in key
  for(var i=0; i<bucket.length; i++){

    // Set tuple equal to each key/value array within the bucket
    var tuple = bucket[i];

    // If tuple contains the passed in key, return the value associated with that key
    if(tuple[0] === k) {
      return bucket[i][1];
    }
  }

  // If the passed in key does not exist in the bucket, return null
  return null;

};

HashTable.prototype.remove = function(k){

  // Generates index within array size for the given key
  var i = getIndexBelowMaxForKey(k, this._limit);

  // Sets bucket variable to the index in the total array
  var bucket = this._storage.get(i);

  // If no bucket exists there, return null
  if (!bucket) {
    return null;
  }

  // If a bucket exists, check each key/value array for the passed in key
  for (var i = 0; i < bucket.length; i++) {
    
    // Store tuple within a tuple variable
    var tuple = bucket[i];

    // If tuple contains the passed in key, delete the tuple
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._count--;
      if (this._count < this._limit * 0.25) {
        this._limit = this._limit / 2;
        this._storage = LimitedArray(this._limit);
      }

    }

    // Return the value of the tuple that was deleted
    return tuple[1];
  }

  // If the passed in key is not in the bucket, return null
  return null;
};

HashTable.prototype.resize = function(newSize) {
  var temp = this._storage;
  this._limit = newSize;
  this._storage = LimitedArray(newSize);

  this._count = 0;
  
  temp.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
