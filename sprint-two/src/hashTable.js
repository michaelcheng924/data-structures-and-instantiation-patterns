var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // Generates index within array size for the given key
  var i = getIndexBelowMaxForKey(k, this._limit);

  // Sets bucket variable to the index in the total array
  var bucket = this._storage.get(i);

  // If no bucket is found, make bucket an empty array
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
  }  
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    return null;
  }

  for(var i=0; i<bucket.length; i++){
    if(bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
    return tuple[1];
  }

  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
