

var Graph = function(){
};

Graph.prototype.addNode = function(node){
  // Key: node, Value: Object with key/value node
  this[node] = {node: node};
};

Graph.prototype.contains = function(node){
  // Check if object at node contains value node
  return _.contains(this[node], node);
};

Graph.prototype.removeNode = function(node){
  // Delete key/value for node
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // Check for two keys: fromNode and toNode
  // Checks for flipped arguments
  return _.contains(this[fromNode], toNode) || _.contains(this[toNode], fromNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // Add unique 'connectedTo' properties to both nodes
  this[fromNode]['connectedTo' + toNode] = toNode;
  this[toNode]['connectedTo' + fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // Delete both 'connectedTo' properties for both nodes
  delete this[fromNode]['connectedTo' + toNode];
  delete this[toNode]['connectedTo' + fromNode];
};

Graph.prototype.forEachNode = function(cb){
  // Iterate through graph keys
  for (var key in this) {
    // Only iterate through graph objects, not methods
    if (typeof(this[key]) === 'object') {
      // Perform callback function on object node values
      cb(this[key].node);
    }
  }
};