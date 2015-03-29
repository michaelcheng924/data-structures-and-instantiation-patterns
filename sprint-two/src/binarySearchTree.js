var BinarySearchTree = function(value){

  // Prototypal instantiation patter
  var tree = Object.create(BinarySearchTree.prototype);

  // Value is used for comparisons
  tree.value = value;

  // Initialize left and right values to null
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function(value){

  // Recursively walk down tree to correct spot
  var walkTree = function(tree) {

    // Compare inserted value with node value
    if (value > tree.value) {

      // If value is greater and no right value exists
      if (!tree.right) {
        // Set the right value to a new subtree
        tree.right = BinarySearchTree(value);
      } else {
        // If right value exists, repeat walkTree with this node
        walkTree(tree.right);
      }
    // Repeat if value is less than node value
    } else {
      if (!tree.left) {
        tree.left = BinarySearchTree(value);
      } else {
        walkTree(tree.left);
      }
    }
  };
  // Initialize walkTree function with top node
  walkTree(this);
};

BinarySearchTree.prototype.contains = function(target){
  var contains = false;

  var walkTree = function(tree) {
    if (tree.value === target) {
      contains = true;
    } else if (tree.left || tree.right) {
      walkTree(tree.right || tree.left);
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
