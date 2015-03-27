var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if(!bucket){
    var bucket = [];
    this._storage.set(i,bucket);
  }
  var keyFound;

  for(var i=0; i<bucket.lengh; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      keyFound = true;
      break;
    }
  }
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
