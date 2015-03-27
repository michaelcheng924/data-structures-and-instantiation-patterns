

var Graph = function(){
};

Graph.prototype.addNode = function(node){
  this[node] = {node: node};
};

Graph.prototype.contains = function(node){
  return _.contains(this[node], node);
};

Graph.prototype.removeNode = function(node){
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){

  return _.contains(this[fromNode], toNode) || _.contains(this[toNode], fromNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){

  this[fromNode]['connectedTo' + toNode] = toNode;
  this[toNode]['connectedTo' + fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode]['connectedTo' + toNode];
  delete this[toNode]['connectedTo' + fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this) {
    if (typeof(this[key]) === 'object') {
      cb(this[key].node);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



