var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function(value){
  var walkTree = function(tree) {
    if (value > tree.value) {
      if (!tree.right) {
        tree.right = BinarySearchTree(value);
      } else {
        walkTree(tree.right);
      }
    } else {
      if (!tree.left) {
        tree.left = BinarySearchTree(value);
      } else {
        walkTree(tree.left);
      }
    }
  };
  walkTree(this);
};
BinarySearchTree.prototype.contains = function(target){
  var contains = false;

  var walkTree = function(tree) {
    if (tree.value === target) {
      contains = true;
    } 
    if (tree.left || tree.right) {
      walkTree(tree.left || tree.right);
    }
  };
  walkTree(this);
  return contains;
};
BinarySearchTree.prototype.depthFirstLog = function(callback){

  var walkTree = function(tree) {
    callback(tree.value); ;
    if (tree.left || tree.right) {
      walkTree(tree.left || tree.right);
    }
  };
  walkTree(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
