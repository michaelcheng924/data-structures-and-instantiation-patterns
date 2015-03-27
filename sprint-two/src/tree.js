var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here

  newTree.children = [];  
  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var contains = false;

  var walkTree = function(node) {
    if (node.value === target) {
      contains = true;
    }
    if (node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        walkTree(node.children[i]);
      }
    }
  };
  walkTree(this);

  return contains;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
