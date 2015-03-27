var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, i){
  var i = getIndexBelowMaxForKey(k, this._limit)
  // if (i === undefined) {
  //   var i = getIndexBelowMaxForKey(k, this._limit);
  // }

  // if (!this._storage.get(i)) {
  //   this._storage.set(i, v);
  // } else {
  //   var newArray = LimitedArray(this._limit);
  //   this._storage.set(i, v);
  // }

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
    bucket.push(tuple);
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

  
  // return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  var value = this.retrieve(k);
  var index;

  this._storage.each(function(v, i, storage){
    if(v == value){
      index = i;
    }
  });

  this._storage.set(index, null);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
