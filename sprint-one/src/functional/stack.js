var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    size && size--;
    var result = storage[size];
    delete storage[size];
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
